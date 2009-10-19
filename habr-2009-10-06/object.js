// конструктор объекта
var anchorChanger = function () 
{
    this.init();
};

anchorChanger.prototype.config = {
    colors: [ "#F63", "#CC0", "#CFF" ]
};

anchorChanger.prototype.changeColor = function (linkObj, newColor) 
{
    linkObj.style.backgroundColor = newColor;
};

anchorChanger.prototype.init = function () 
{
    var self = this;
    var anchors = document.getElementsByTagName("a");
    var size = anchors.length;
    for (var i =0; i < size; i++) 
	{
        anchors[i].color = self.config.colors[i];
        anchors[i].onclick = function () 
    	{
            self.changeColor(this, this.color);
            return false;
        };
    }
};