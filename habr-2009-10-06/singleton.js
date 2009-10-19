// ������� ����� � ��� �� ���������� ���
var anchorChange2 = {
    config: {
        colors: [ "#F63", "#CC0", "#CFF" ]
    },
    
    // ���������� ��������� �������� �����
    alterColor: function (linkObj, newColor) 
	{
        linkObj.style.backgroundColor = newColor;
    },

    init: function () 
	{
        var self = this; // ��������� ������� ������ � "self"
        // �������� ��� ������ �� ��������
        var anchors = document.getElementsByTagName("a");
        var size = anchors.length;
        for (var i =0; i < size; i++) 
    	{
            anchors[i].color = self.config.colors[i];
            anchors[i].onclick = function () 
        	{
                self.alterColor(this, this.color); // ����������� ������� � �������
                return false;
            };
        }
    }
};