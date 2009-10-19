var anchorChange5 = function () 
{
    var config = {
        colors: [ "#F63", "#CC0", "#CFF" ]
    };
    
    var anchors = document.getElementsByTagName("a");
    var size = anchors.length;
    
    for (var i =0; i < size; i++) 
	{
        anchors[i].color = config.colors[i];
        anchors[i].onclick = function () 
    	{
            anchorChange5().changeColor(this, this.color);
            return false;
        };
    }
    
    anchorChange5 = function () 
	{
        return {
            changeColor: function (linkObj, newColor) 
        	{
                linkObj.style.backgroundColor = newColor;
            }
        };
    };
};
