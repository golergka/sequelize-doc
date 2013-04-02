function DirWriter(e){var t=this;t instanceof DirWriter||t.error("DirWriter must be called as constructor.",null,!0),(e.type!=="Directory"||!e.Directory)&&t.error("Non-directory type "+e.type+" "+JSON.stringify(e),null,!0),Writer.call(this,e)}module.exports=DirWriter;var fs=require("../../graceful-fs/graceful-fs.js"),fstream=require("../fstream.js"),Writer=require("./writer.js"),inherits=require("../../inherits/inherits.js"),mkdir=require("../../mkdirp"),path=require("path"),collect=require("./collect.js");inherits(DirWriter,Writer),DirWriter.prototype._create=function(){var e=this;mkdir(e._path,Writer.dirmode,function(t){if(t)return e.error(t);e.ready=!0,e.emit("ready"),e._process()})},DirWriter.prototype.write=function(){return!0},DirWriter.prototype.end=function(){this._ended=!0,this._process()},DirWriter.prototype.add=function(e){var t=this;return collect(e),!t.ready||t._currentEntry?(t._buffer.push(e),!1):t._ended?t.error("add after end"):(t._buffer.push(e),t._process(),0===this._buffer.length)},DirWriter.prototype._process=function(){function u(){if(o)return;o=!0,e._currentChild=null,e._processing=!1,e._process()}var e=this;if(e._processing)return;var t=e._buffer.shift();if(!t){e.emit("drain"),e._ended&&e._finish();return}e._processing=!0,e.emit("entry",t);var n=t;do{var r=n._path||n.path;if(r===e.root._path||r===e._path||r&&r.indexOf(e._path)===0)return e._processing=!1,t._collected&&t.pipe(),e._process()}while(n=n.parent);var i={parent:e,root:e.root||e,type:t.type,depth:e.depth+1},n=t._path||t.path||t.props.path;t.parent&&(n=n.substr(t.parent._path.length+1)),i.path=path.join(e.path,path.join("/",n)),i.filter=e.filter,Object.keys(t.props).forEach(function(e){i.hasOwnProperty(e)||(i[e]=t.props[e])});var s=e._currentChild=new Writer(i);s.on("ready",function(){t.pipe(s),t.resume()}),s.on("error",function(t){s._swallowErrors?(e.warn(t),s.emit("end"),s.emit("close")):e.emit("error",t)}),s.on("close",u);var o=!1};