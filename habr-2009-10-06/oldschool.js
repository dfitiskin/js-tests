function changeColor1(linkObj, newColor) 
{
    linkObj.style.backgroundColor = newColor;
}

function anchorChange1() 
{
    var config = {
        colors: [ "#F63", "#CC0", "#CFF" ]
    };

    var anchors = document.getElementsByTagName("a");
    
    for (var i = 0, size = anchors.length; i < size; i++) 
	{
        anchors[i].color = config.colors[i];
        anchors[i].onclick = function () 
    	{
            changeColor1(this, this.color);
            return false;
        };
    }
}
