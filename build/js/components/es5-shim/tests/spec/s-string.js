describe("String",function(){describe("trim",function(){var e="	\n\f\r   ᠎             　\u2028\u2029﻿Hello, World!	\n\f\r   ᠎             　\u2028\u2029﻿";it("trims all ES5 whitespace",function(){expect(e.trim()).toEqual("Hello, World!"),expect(e.trim().length).toEqual(13)})}),describe("split",function(){var e="ab";it('If "separator" is undefined must return Array with one String - "this" string',function(){expect(e.split()).toEqual([e]),expect(e.split(void 0)).toEqual([e])}),it('If "separator" is undefined and "limit" set to 0 must return Array[]',function(){expect(e.split(void 0,0)).toEqual([])})})});