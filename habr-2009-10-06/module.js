var anchorChange3 = function () 
{
    // private свойство
    var config = {
        colors: [ "#F63", "#CC0", "#CFF" ]
    };
    
    // private метод
    function alterColor(linkObj, color) 
	{
        linkObj.style.backgroundColor = color;
    }
    
    return {
        // public метод
        changeColor: function (linkObj, newColor) 
    	{
            // вызывает private метод, мен€ющий цвет
            alterColor(linkObj, newColor);
        },

        // public метод
        init: function () 
    	{
            var self = this;
            var anchors = document.getElementsByTagName("a");
            var size = anchors.length;
            for (var i =0; i < size; i++) 
        	{
                anchors[i].color = config.colors[i];
                anchors[i].onclick = function () 
            	{
                    self.changeColor(this, this.color);
                    return false;
                };
            }
        }
    };
}();
