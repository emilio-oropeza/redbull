(function($){
	$.fn.photoframe = function(options){
		return this.each(function() {
			var element = $(this);						
			if (element.data('photoframe')) return;
			var myplugin = new Photoframe(this, options);
			element.data('photoframe', myplugin);
			element.data('photoframe').methods.init();
			
		});
	};
	
	var Photoframe = function(target, options ){
		var componentObj = {
			methods:{
				init:function(){
					componentObj.methods.style();
					var id = $(target).attr("id") + "file_input";
					$('<input type="file" id="'+id+'">').appendTo(target);
					id = "#"+ id;
					$(id).change(componentObj.methods.charge);
				},
				style: function(){
					$(target).css({
						"width":options.width != undefined?options.width:"100",
						"height":options.height != undefined?options.height:"100"
					});
				},
				charge: function(e){
					var URL = window.webkitURL || window.URL;
				    var url = URL.createObjectURL(e.target.files[0]);
				    var img = new Image();
				    img.src = url;			
				    img_width = img.width;
		            img_height = img.height;
		            var outside = $("<div class='outside'/>").appendTo("body");
		            var component = $("<div class='component'/>").appendTo(outside);			            
		            var overlay = $("<div class='overlay'/>").appendTo(component);
		            $(overlay).css({
		            	"width":options.width != undefined?options.width:"100",
						"height":options.height != undefined?options.height:"100"
		            });
		            $(overlay).after
		            var btn = $('<button class="btn-crop js-crop">Crop<img class="icon-crop" src="test/img/crop.svg"></button></div>').appendTo(component);
		            var overlay_inner = $("<div class='overlay-inner'/>").appendTo(overlay);
		            $(img).attr("class","resize-imag");
		            $(img).attr("option", $(target).attr("id"));
		            $(img).appendTo(component);
		            resizeableImage(img);   
				}
			}
		};
		return componentObj;
	};	
})(jQuery);

/*<div class="component">
					<div class="overlay">
						<div class="overlay-inner">
						</div>
					</div>
					<!-- This image must be on the same domain as the demo or it will not work on a local file system -->
					<!-- http://en.wikipedia.org/wiki/Cross-origin_resource_sharing -->
					<img class="resize-image" src="img/image.jpg" alt="image for resizing">
					<button class="btn-crop js-crop">Crop<img class="icon-crop" src="img/crop.svg"></button>
				</div>
				*/