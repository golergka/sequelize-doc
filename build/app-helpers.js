var request=require("request");module.exports={Changelog:{load:function(e){this.getRawData(function(t,n,r){e(this.parseRawData(r))}.bind(this))},getRawData:function(e){request("https://raw.github.com/sequelize/sequelize/master/changelog.md",e)},parseRawData:function(e){var t=[];return function(){var n=null,r=null,i=[];e.split("\n").forEach(function(e){if(r=e.match(/^#\sv(\d+\.\d+\.\d+)\s#$/))n!==null&&(t.push({version:n,changes:i}),i=[]),n=r[1];else if(e.trim()!==""){var s=e.match(/-\s(\[.+?\])?\s?(.+)/);i.push({type:(s[1]||"").replace("[","").replace("]","").toLowerCase(),description:s[2]})}})}(),t}}};