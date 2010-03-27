/**
 * supplant() does variable substitution on the string. It scans
 * through the string looking for expressions enclosed in {} braces.
 * If an expression is found, use it as a key on the object,
 * and if the key has a string value or number value, it is
 * substituted for the bracket expression and it repeats. 
 */
String.prototype.supplant = function(o) 
{
    return this.replace(
        /{([^{}]*)}/g,
        function(a, b) 
    	{
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};

function Template(id)
{
	var tpl;
	if (tpl = document.getElementById(id))
	{
		if (tpl.src)
		{
			this.load(tpl.src);
		}
		else
		{
            this.content = tpl.innerHTML;
		}
	}
}

Template.prototype.loaded = true;
Template.prototype.content = new String;

Template.prototype.load = function(src)
{
	this.loaded = false;
	var http = this.createRequestObject();
    if (http)   
    {  
        http.open('get', src);
        var target = this;
        http.onreadystatechange = function ()   
        {  
            if(http.readyState == 4)   
            {  
                target.content = http.responseText;
                target.loaded = true;
                
                if (target.renderAfterLoad)
                {
                	target.renderInto(target.renderAfterLoad['data'], target.renderAfterLoad['target']);
                }
            }  
        }  
        http.send(null);      
    }
}

Template.prototype.createRequestObject = function()   
{  
    try 
	{ 
        return new XMLHttpRequest();
    }  
    catch(e)   
    {  
        try 
    	{ 
            return new ActiveXObject('Msxml2.XMLHTTP'); 
        }  
        catch(e)   
        {  
            try 
        	{ 
                return new ActiveXObject('Microsoft.XMLHTTP'); 
            }  
            catch(e)
        	{ 
                return null;
            }  
        }  
    }  
}  

Template.prototype.render = function(data)
{
    return this.content.supplant(data);
}

Template.prototype.renderInto = function(data, target)
{
	var node;
	if (node = document.getElementById(target))
	{
        if (this.loaded)
        {
        	node.innerHTML = this.render(data);
        	this.renderAfterLoad = null;
        }
        else
        {
        	this.renderAfterLoad = {
        		data: data,
        		target: target
        	}
        }
	}
}
