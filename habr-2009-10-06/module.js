var anchorChange3 = function () 
{
    // private ��������
    var config = {
        colors: [ "#F63", "#CC0", "#CFF" ]
    };
    
    // private �����
    function alterColor(linkObj, color) 
	{
        linkObj.style.backgroundColor = color;
    }
    
    return {
        // public �����
        changeColor: function (linkObj, newColor) 
    	{
            // �������� private �����, �������� ����
            alterColor(linkObj, newColor);
        },

        // public �����
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
