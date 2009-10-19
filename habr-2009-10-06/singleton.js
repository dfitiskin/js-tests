// создаем класс и тут же используем его
var anchorChange2 = {
    config: {
        colors: [ "#F63", "#CC0", "#CFF" ]
    },
    
    // собственно установка фонового цвета
    alterColor: function (linkObj, newColor) 
	{
        linkObj.style.backgroundColor = newColor;
    },

    init: function () 
	{
        var self = this; // сохраняем текущий объект в "self"
        // получаем все ссылки на странице
        var anchors = document.getElementsByTagName("a");
        var size = anchors.length;
        for (var i =0; i < size; i++) 
    	{
            anchors[i].color = self.config.colors[i];
            anchors[i].onclick = function () 
        	{
                self.alterColor(this, this.color); // привязываем функцию к событию
                return false;
            };
        }
    }
};