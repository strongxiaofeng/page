var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function r(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),CameraScript=function(t){function o(){return t.call(this)||this}return __extends(o,t),o.prototype._load=function(t){console.log("camera load"),this.camera=t},o.prototype._start=function(t){console.log("camera start")},Object.defineProperty(o.prototype,"ball",{set:function(t){console.log("camera set ball"),this._ball=t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"root",{set:function(t){console.log("camera set root"),this._root=t},enumerable:!0,configurable:!0}),o.prototype._update=function(t){if(this._ball){var o=this.camera.transform.position.y-this._ball.transform.position.y-4;o>0&&(this._root.transform.translate(new Laya.Vector3(0,-o,0)),this.camera.transform.translate(new Laya.Vector3(0,-o*Math.cos(20/180*Math.PI),-o*Math.sin(20/180*Math.PI)),!0))}},o}(Laya.Script);