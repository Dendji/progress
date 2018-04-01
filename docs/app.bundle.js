!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i="http://www.w3.org/2000/svg",o=function(){throw new Error("Progress component is missing parameter")},s=["normal","animated","hidden"],a=90,l=a*Math.PI*2,u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!document.getElementById(t))throw new Error("There is no element with id "+t+" in DOM");if(!s.includes(r))throw new Error("List of modes includes only: normal, animated, hidden");(n<0||n>100)&&(n=50),this.containerId=t,this.value=n,this.mode=r,this.animated="",this.init()}return r(e,[{key:"init",value:function(){var e=document.getElementById(this.containerId),t=function(){var e=document.createElementNS(i,"svg");return e.setAttributeNS(null,"id","progress"),e.setAttributeNS(null,"class","progress-bar"),e.setAttributeNS(null,"width","200"),e.setAttributeNS(null,"height","200"),e.setAttributeNS(null,"version","1.1"),e.setAttributeNS(null,"viewPort","0 0 100 100"),e.style.transform="rotate(-90deg)",e}(),n=c("inner",this.value),r=c("outer",this.value);t.appendChild(n),t.appendChild(r),e.appendChild(t)}},{key:"setValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return!(e<0||e>100)&&(e!==this.value&&"normal"===this.mode&&(!!e.match(/\d+/g)&&(this._value=e,!0)))}},{key:"setMod",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.mode=e,this.animated=t;var n,r,i,o=this.containerId;document.querySelector("#"+o+" svg");switch(e){case"normal":f(this.circleDOM),function(e){m(document.querySelector("#"+e+" svg"),1e3,"in")}(this.containerId);break;case"animated":"yes"===t?(n=this.circleDOM,r=1e3,i={start:performance.now(),total:r},d=requestAnimationFrame(function e(t){i.elapsed=t-i.start;var r=h(i);n.style.transform="rotate("+360*r+"deg)",1==r&&(i.start=t),d=requestAnimationFrame(e)})):f(this.circleDOM);break;case"hidden":!function(e){m(document.querySelector("#"+e+" svg"),1e3,"out")}(this.containerId)}}},{key:"_value",set:function(e){if(this.circleDOM){var t=this.circleDOM,n=(100-e)/100*l;t.style.strokeDashoffset=n}this.value=e}},{key:"circleDOM",get:function(){var e=this.containerId;return document.querySelector("#"+e+" .progress-bar__circle--outer")}}]),e}();function c(e,t){var n=document.createElementNS(i,"circle"),r=(100-t)/100*l;switch(n.style.strokeDashoffset=0,n.style.transition="stroke-dashoffset .25s ease",n.style.stroke="#cccccc",n.style.strokeWidth="20px",n.style.transformOrigin="center center",n.setAttributeNS(null,"cx",100),n.setAttributeNS(null,"cy",100),n.setAttributeNS(null,"r",a),n.setAttributeNS(null,"stroke-dasharray",l),n.setAttributeNS(null,"fill","transparent"),n.setAttributeNS(null,"stroke-dashoffset",100),e){case"inner":n.setAttributeNS(null,"class","progress-bar__circle progress-bar__circle--inner");break;case"outer":n.setAttributeNS(null,"class","progress-bar__circle progress-bar__circle--outer"),n.style.stroke="#ffdb4d",n.style.strokeLinecap="round",n.style.strokeDashoffset=r}return n}var d=null,h=function(e){var t=e.elapsed,n=e.total;return Math.min(t/n,1)};function f(e){e.style.transform="rotate(-90deg)",cancelAnimationFrame(d)}function m(e,t,n){var r={start:performance.now(),total:t};requestAnimationFrame(function t(i){r.elapsed=i-r.start;var o=h(r),s=function(e){return Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1}(o);"in"===n?e.style.transform="scale("+s+")":"out"===n&&(e.style.transform="scale("+(1-s)+")"),1!=o&&requestAnimationFrame(t)})}t.default=u},function(e,t,n){"use strict";n(6);var r,i=n(0),o=(r=i)&&r.__esModule?r:{default:r};document.addEventListener("DOMContentLoaded",function(){var e=new o.default("container");console.log(e),e.setMod("normal");var t=document.getElementById("input-value"),n=document.getElementById("switch-animate"),r=document.getElementById("switch-hide");t.oninput=function(t){parseInt(this.value);this.value>100?this.value=this.value.slice(0,2):e.setValue(this.value)},n.onchange=function(t){this.checked?e.setMod("animated","yes"):e.setMod("normal")},r.onchange=function(t){this.checked?e.setMod("hidden"):e.setMod("normal")}})},,,,,function(e,t){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwidmFsdWUiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInN2Z05TIiwicmVxdWlyZWQiLCJFcnJvciIsIm1vZGVzIiwicmFkaXVzIiwiY2lyY2xlTGVuZ3RoIiwiTWF0aCIsIlBJIiwiUHJvZ3Jlc3MiLCJjb250YWluZXJJZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1vZGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluY2x1ZGVzIiwiYW5pbWF0ZWQiLCJpbml0IiwiY29udGFpbmVyIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlTlMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNyZWF0ZVN2ZyIsImlubmVyQ2lyY2xlIiwiY3JlYXRlQ2lyY2xlIiwib3V0ZXJDaXJjbGUiLCJhcHBlbmRDaGlsZCIsIm1hdGNoIiwiX3ZhbHVlIiwiY2lyY2xlIiwicGVyaW9kIiwidGltZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdG9wQW5pbWF0aW9uIiwiY2lyY2xlRE9NIiwic2NhbGVJbk91dCIsInNob3ciLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwidG90YWwiLCJyZXFJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJlbGFwc2VkIiwicHJvZ3Jlc3MiLCJnZXRQcm9ncmVzcyIsImhpZGUiLCJuZXdWYWx1ZSIsInBlcmNlbnRhZ2UiLCJzdHJva2VEYXNob2Zmc2V0IiwidHlwZSIsInRyYW5zaXRpb24iLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInRyYW5zZm9ybU9yaWdpbiIsInN0cm9rZUxpbmVjYXAiLCJfcmVmIiwibWluIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkdXJhdGlvbiIsImRpcmVjdGlvbiIsInBvdyIsInNpbiIsImVhc2VPdXRFbGFzdGljIiwiX1Byb2dyZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9Qcm9ncmVzczIiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInNldE1vZCIsImlucHV0VmFsdWUiLCJzd2l0Y2hBbmltYXRlIiwic3dpdGNoSGlkZSIsIm9uaW5wdXQiLCJldmVudCIsInBhcnNlSW50Iiwic2xpY2UiLCJzZXRWYWx1ZSIsIm9uY2hhbmdlIiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BWixFQUFBbUIsRUFBQSxTQUFBakIsR0FDQVksT0FBQUMsZUFBQWIsRUFBQSxjQUFp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R0FDQSxNQUFBbUcsRUFBQW5HLEVBQUEsdUNBRUE2QyxTQUFTdUQsaUJBQWlCLG1CQUUxQixXQUNFLElBQUlyQixFQUFXLElBQUFzQixFQUFBQyxRQUFhLGFBQzVCQyxRQUFRQyxJQUFJekIsR0FDWkEsRUFBUzBCLE9BQU8sVUFPaEIsSUFBSUMsRUFBYTdELFNBQVNDLGVBQWUsZUFDckM2RCxFQUFnQjlELFNBQVNDLGVBQWUsa0JBQ3hDOEQsRUFBYS9ELFNBQVNDLGVBQWUsZUFFekM0RCxFQUFXRyxRQVZYLFNBQXFCQyxHQUNMQyxTQUFTbkUsS0FBS3hCLE9BQzVCd0IsS0FBS3hCLE1BQVEsSUFDUndCLEtBQUt4QixNQUFRd0IsS0FBS3hCLE1BQU00RixNQUFNLEVBQUcsR0FDbENqQyxFQUFTa0MsU0FBU3JFLEtBQUt4QixRQVE3QnVGLEVBQWNPLFNBQVcsU0FBU0osR0FDaENsRSxLQUFLdUUsUUFDRHBDLEVBQVMwQixPQUFPLFdBQVksT0FDNUIxQixFQUFTMEIsT0FBTyxXQUV0QkcsRUFBV00sU0FBVyxTQUFTSixHQUM3QmxFLEtBQUt1RSxRQUFVcEMsRUFBUzBCLE9BQU8sVUFBWTFCLEVBQVMwQixPQUFPIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLyoqIEBtb2R1bGUgUHJvZ3Jlc3NcbiAqICBAYXV0aG9yIERlbmlzIFp1eWtvdiA8ZGVuZGpldEBnbWFpbC5jb20+XG4gKi9cblxuY29uc3Qgc3ZnTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyBkZXRlY3QgZW1wdHkgcGFyYW1ldGVycyBpbiBmdW5jdGlvbnNcbmNvbnN0IHJlcXVpcmVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2dyZXNzIGNvbXBvbmVudCBpcyBtaXNzaW5nIHBhcmFtZXRlcicpO1xufTtcbi8qKiBAY29uc3RhbnQge2FycmF5fSAqL1xuY29uc3QgbW9kZXMgPSBbJ25vcm1hbCcsICdhbmltYXRlZCcsICdoaWRkZW4nXTtcblxuLyoqIEBjb25zdGFudCB7bnVtYmVyfSAqL1xuY29uc3QgcmFkaXVzID0gOTA7XG4vKiogQGNvbnN0YW50IHtudW1iZXJ9ICovXG5jb25zdCBjaXJjbGVMZW5ndGggPSByYWRpdXMgKiBNYXRoLlBJICogMjtcbi8qKiBAY29uc3RhbnQge251bWJlcn0gKi9cbmNvbnN0IGFuaW1hdGlvblBlcmlvZCA9IDEwMDA7XG4vKiogQGNvbnN0YW50IHtzdHJpbmd9ICovXG5jb25zdCBvdXRlckNpcmNsZUNsYXNzID0gJ3Byb2dyZXNzLWJhcl9fY2lyY2xlLS1vdXRlcic7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwcm9ncmVzcyBiYXIuICovXG5jbGFzcyBQcm9ncmVzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwcm9ncmVzcyBiYXIuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGFpbmVySWQgLSBET00gY29udGFpbmVyIGlkIHRvIHB1dCBwcm9ncmVzcyBiYXIgaW4uIElmIGNvbnRhaW5lcklkIGlzIGVtcHR5IHRoZW4gdGhyb3cgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIEluaXRpYWwgdmFsdWUgZm9yIHByb2dyZXNzIGJhci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgLSBJbml0aWFsIHZhbHVlIGZvciBtb2RlLiBWYWx1ZXMgYXJlIHBvc3NpYmxlOiBub3JtYWwsIGFuaW1hdGVkIGFuZCBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcklkID0gcmVxdWlyZWQoKSwgdmFsdWUgPSAxMCwgbW9kZSA9ICdub3JtYWwnKSB7XG4gICAgLy8gY2hlY2sgaWYgY29udGFpZW5yIGV4aXN0cyBpbiBET01cbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBlbGVtZW50IHdpdGggaWQgJHtjb250YWluZXJJZH0gaW4gRE9NYCk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgbW9kZXMgaW5jbHVkZSBwYXJhbWV0ZXIgbW9kZVxuICAgIGlmICghbW9kZXMuaW5jbHVkZXMobW9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGlzdCBvZiBtb2RlcyBpbmNsdWRlcyBvbmx5OiBub3JtYWwsIGFuaW1hdGVkLCBoaWRkZW5gKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBpbiBzcGVjaWZpZWQgaW50ZXJ2YWxcbiAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMTAwKSB2YWx1ZSA9IDUwO1xuXG4gICAgdGhpcy5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuYW5pbWF0ZWQgPSAnJztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICAvLyBjcmVhdGluZyBwcm9ncmVzcyBiYXIgYW5kIGFwcGVuZGluZyB0byBET01cbiAgaW5pdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCk7XG4gICAgbGV0IHN2ZyA9IGNyZWF0ZVN2ZygpO1xuICAgIGxldCBpbm5lckNpcmNsZSA9IGNyZWF0ZUNpcmNsZSgnaW5uZXInLCB0aGlzLnZhbHVlKTtcbiAgICBsZXQgb3V0ZXJDaXJjbGUgPSBjcmVhdGVDaXJjbGUoJ291dGVyJywgdGhpcy52YWx1ZSk7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQoaW5uZXJDaXJjbGUpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN2Zyk7XG4gIH1cbiAgLyoqXG4gICAqIE5ldyB2YWx1ZSBzZXR0ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1ZhbHVlIC0gVmFsdWUgZnJvbSAwIHRvIDEwMC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXIgaXMgY29ycmVjdFxuICAgKi9cbiAgc2V0VmFsdWUodmFsdWUgPSAwKSB7XG4gICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgaW4gc3BlY2lmaWVkIGludGVydmFsXG4gICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEwMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBkaWRuJ3QgY2hhbmdlIG9yIG1vZGUgaXMgYW5pbWF0ZWQgb3IgaGlkZGVuXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlIHx8IHRoaXMubW9kZSAhPT0gJ25vcm1hbCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgbnVtYmVyIGlzIGRpZ2l0XG4gICAgaWYgKCF2YWx1ZS5tYXRjaCgvXFxkKy9nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIHZhbHVlIHNldHRlclxuICBzZXQgX3ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgLy8gaWYgcHJvZ3Jlc3MgaW5pdGlhbGl6ZWQgdGhlbiBoYW5kbGUgdmFsdWVcbiAgICBpZiAodGhpcy5jaXJjbGVET00pIHtcbiAgICAgIGNvbnN0IGNpcmNsZSA9IHRoaXMuY2lyY2xlRE9NO1xuICAgICAgLy8gZ2V0IHBlcmNlbnRhZ2UgZnJvbSBjaXJjbGUgbGVuZ3RoXG4gICAgICBjb25zdCBwZXJjZW50YWdlID0gKDEwMCAtIG5ld1ZhbHVlKSAvIDEwMCAqIGNpcmNsZUxlbmd0aDtcbiAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcGVyY2VudGFnZTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IFByb2dyZXNzIGJhciBtb2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAtIE5vcm1hbCwgYW1pbWF0ZWQgb3IgaGlkZGVuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbWF0ZWQgLSBZZXMgb3IgZW1wdHkgdmFsdWVcbiAgICogQHJldHVybiB7bnVtYmVyfSBBIGNpcmNsZSBsZW5ndGguXG4gICAqL1xuICBzZXRNb2QobW9kZSA9ICdub3JtYWwnLCBhbmltYXRlZCA9ICcnKSB7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLmFuaW1hdGVkID0gYW5pbWF0ZWQ7XG4gICAgY29uc3QgeyBjb250YWluZXJJZCB9ID0gdGhpcztcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJZH0gc3ZnYCk7XG5cbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIC8vIHN2Zy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc3RvcEFuaW1hdGlvbih0aGlzLmNpcmNsZURPTSk7XG4gICAgICAgIHNob3codGhpcy5jb250YWluZXJJZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYW5pbWF0ZWQnOlxuICAgICAgICBhbmltYXRlZCA9PT0gJ3llcydcbiAgICAgICAgICA/IHN0YXJ0QW5pbWF0aW9uKHRoaXMuY2lyY2xlRE9NLCBhbmltYXRpb25QZXJpb2QpXG4gICAgICAgICAgOiBzdG9wQW5pbWF0aW9uKHRoaXMuY2lyY2xlRE9NKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICBoaWRlKHRoaXMuY29udGFpbmVySWQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IGNpcmNsZSBET00gb2JqZWN0XG4gIGdldCBjaXJjbGVET00oKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJJZCB9ID0gdGhpcztcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySWR9IC4ke291dGVyQ2lyY2xlQ2xhc3N9YCk7XG4gIH1cbn1cbi8vIHNob3cgbWV0aG9kXG5mdW5jdGlvbiBzaG93KGNvbnRhaW5lcklkKSB7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklkfSBzdmdgKTtcbiAgc2NhbGVJbk91dChzdmcsIDEwMDAsICdpbicpO1xufVxuLy8gaGlkZSBtZXRob2RcbmZ1bmN0aW9uIGhpZGUoY29udGFpbmVySWQpIHtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySWR9IHN2Z2ApO1xuICBzY2FsZUluT3V0KHN2ZywgMTAwMCwgJ291dCcpO1xufVxuXG4vLyBjcmVhdGUgY2lyY2xlIGFzIERPTSBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVDaXJjbGUodHlwZSwgdmFsdWUpIHtcbiAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgJ2NpcmNsZScpO1xuXG4gIC8vIGdpdCBmaWxsZWQgcGVyY2FudGFnZSBiYXNlZCBvbiBjdXJyZW50IHZhbHVlXG4gIGxldCBwZXJjZW50YWdlID0gKDEwMCAtIHZhbHVlKSAvIDEwMCAqIGNpcmNsZUxlbmd0aDtcblxuICAvLyBhZGRpbmcgZGVmYXVsdCBzdHlsZVxuICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IDA7XG4gIGNpcmNsZS5zdHlsZS50cmFuc2l0aW9uID0gJ3N0cm9rZS1kYXNob2Zmc2V0IC4yNXMgZWFzZSc7XG4gIGNpcmNsZS5zdHlsZS5zdHJva2UgPSAnI2NjY2NjYyc7XG4gIGNpcmNsZS5zdHlsZS5zdHJva2VXaWR0aCA9ICcyMHB4JztcbiAgY2lyY2xlLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdjZW50ZXIgY2VudGVyJztcblxuICAvLyBhZGRpbmcgc3ZnIGF0dHJpYnV0ZXNcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIDEwMCk7XG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3knLCAxMDApO1xuICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3InLCByYWRpdXMpO1xuICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZS1kYXNoYXJyYXknLCBjaXJjbGVMZW5ndGgpO1xuICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKTtcbiAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdHJva2UtZGFzaG9mZnNldCcsIDEwMCk7XG5cbiAgLy8gZGVwZW5kaW5nIG9uIGlubmVyIGNpcmNsZSBvciBvdXRlciBjaXJjbGUgbW9kaWZ5aW5nIGF0dHJpYnV0ZXMgYW5kIHN0eWxlXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2lubmVyJzpcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ3Byb2dyZXNzLWJhcl9fY2lyY2xlIHByb2dyZXNzLWJhcl9fY2lyY2xlLS1pbm5lcidcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvdXRlcic6XG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMoXG4gICAgICAgIG51bGwsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdwcm9ncmVzcy1iYXJfX2NpcmNsZSBwcm9ncmVzcy1iYXJfX2NpcmNsZS0tb3V0ZXInXG4gICAgICApO1xuICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZSA9ICcjZmZkYjRkJztcbiAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VMaW5lY2FwID0gJ3JvdW5kJztcbiAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcGVyY2VudGFnZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBjaXJjbGU7XG59XG5cbi8vIGNyZWF0ZSBzdmcgbWV0aG9kXG5mdW5jdGlvbiBjcmVhdGVTdmcoKSB7XG4gIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsICdzdmcnKTtcbiAgLy8gc2V0dGluZyBTVkcgYXR0cmlidXRlc1xuICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2lkJywgJ3Byb2dyZXNzJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY2xhc3MnLCAncHJvZ3Jlc3MtYmFyJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCAnMjAwJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgJzIwMCcpO1xuICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZlcnNpb24nLCAnMS4xJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld1BvcnQnLCAnMCAwIDEwMCAxMDAnKTtcblxuICAvLyB3ZSBuZWVkIGl0IHRvIHN0YXJ0IGZyb20gMTIgbydjbG9ja1xuICAvLyBzbyByb3RhdGUgc3ZnIGJ5IDkwIGRlZ3Jlc3MsIGJlY2F1c2UgY2lyY2xlJ3Mgc3Ryb2tlIHN0YXJ0cyBhdCAzIG8nY2xvY2tcbiAgc3ZnLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XG5cbiAgcmV0dXJuIHN2Zztcbn1cblxuLy8gc2V0IHJlcUlkIHRoYXQgbmVlZGVkIGZvciBjYW5jZWxpbmcgYW5pbWF0aW9uXG4vLyByZXFJZCBpcyB1cGRhdGVkIGV2ZXJ5IGZyYW1lXG5sZXQgcmVxSWQgPSBudWxsO1xuXG5jb25zdCBnZXRQcm9ncmVzcyA9ICh7IGVsYXBzZWQsIHRvdGFsIH0pID0+IE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4vLyBzdGFydGluZyBzcGluIGFuaW1hdGlvblxuZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oY2lyY2xlLCBwZXJpb2QpIHtcbiAgbGV0IHRpbWUgPSB7XG4gICAgc3RhcnQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgIHRvdGFsOiBwZXJpb2RcbiAgfTtcblxuICBjb25zdCBkcmF3ID0gbm93ID0+IHtcbiAgICB0aW1lLmVsYXBzZWQgPSBub3cgLSB0aW1lLnN0YXJ0O1xuICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModGltZSk7XG5cbiAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgkezM2MCAqIHByb2dyZXNzfWRlZylgO1xuICAgIGlmIChwcm9ncmVzcyA9PSAxKSB0aW1lLnN0YXJ0ID0gbm93O1xuICAgIHJlcUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICB9O1xuXG4gIHJlcUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuLy8gc3RvcCBzcGluIGFuaW1hdGlvblxuZnVuY3Rpb24gc3RvcEFuaW1hdGlvbihjaXJjbGUpIHtcbiAgY2lyY2xlLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLTkwZGVnKWA7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUlkKTtcbn1cblxuLy8gc2NhbGUgaW4gb3V0IGFuaW1hdGlvblxuZnVuY3Rpb24gc2NhbGVJbk91dChjaXJjbGUsIGR1cmF0aW9uLCBkaXJlY3Rpb24pIHtcbiAgbGV0IHRpbWUgPSB7XG4gICAgc3RhcnQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgIHRvdGFsOiBkdXJhdGlvblxuICB9O1xuICAvLyBlYXNpbmcgZnVuY3Rpb25cbiAgY29uc3QgZWFzZU91dEVsYXN0aWMgPSBwcm9ncmVzcyA9PlxuICAgIE1hdGgucG93KDIsIC0xMCAqIHByb2dyZXNzKSAqIE1hdGguc2luKChwcm9ncmVzcyAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG4gIGNvbnN0IGRyYXcgPSBub3cgPT4ge1xuICAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcyh0aW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGVhc2VPdXRFbGFzdGljKHByb2dyZXNzKTtcblxuICAgIC8vIGRlcGVuZCBvbiBhbmltYXRpb24gZGlyZWN0aW9uIGFwcGx5IHRyYW5zZm9ybVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdpbicpIHtcbiAgICAgIGNpcmNsZS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt2YWx1ZX0pYDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ291dCcpIHtcbiAgICAgIGNpcmNsZS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHsxIC0gdmFsdWV9KWA7XG4gICAgfVxuICAgIC8vIGlmIGFuaW1hdGlvbiBpcyAxMDAlIHRoZW4gcmV0dXJuXG4gICAgaWYgKHByb2dyZXNzID09IDEpIHJldHVybjtcbiAgICAvLyBnbyB0byBuZXh0IGZyYW1lXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICB9O1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbn1cblxuLyoqIEV4cG9ydCBQcm9ncmVzcyBjbGFzcy4gKi9cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xuIiwiaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2Fzcyc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9jb21wb25lbnRzL1Byb2dyZXNzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcCk7XG5cbmZ1bmN0aW9uIGFwcCgpIHtcbiAgbGV0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzKCdjb250YWluZXInKTtcbiAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuICBwcm9ncmVzcy5zZXRNb2QoJ25vcm1hbCcpO1xuICBmdW5jdGlvbiBoYW5kbGVWYWx1ZShldmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZSA+IDEwMFxuICAgICAgPyAodGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgMikpXG4gICAgICA6IHByb2dyZXNzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICB9XG4gIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXZhbHVlJyk7XG4gIGxldCBzd2l0Y2hBbmltYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1hbmltYXRlJyk7XG4gIGxldCBzd2l0Y2hIaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1oaWRlJyk7XG5cbiAgaW5wdXRWYWx1ZS5vbmlucHV0ID0gaGFuZGxlVmFsdWU7XG5cbiAgc3dpdGNoQW5pbWF0ZS5vbmNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5jaGVja2VkXG4gICAgICA/IHByb2dyZXNzLnNldE1vZCgnYW5pbWF0ZWQnLCAneWVzJylcbiAgICAgIDogcHJvZ3Jlc3Muc2V0TW9kKCdub3JtYWwnKTtcbiAgfTtcbiAgc3dpdGNoSGlkZS5vbmNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5jaGVja2VkID8gcHJvZ3Jlc3Muc2V0TW9kKCdoaWRkZW4nKSA6IHByb2dyZXNzLnNldE1vZCgnbm9ybWFsJyk7XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9