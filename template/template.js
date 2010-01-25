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
		this.content = tpl.innerHTML;
	}
}

Template.prototype.content = new String;

Template.prototype.render = function(data)
{
	return this.content.supplant(data);
}

Template.prototype.renderInto = function(data, target)
{
	var node;
	if (node = document.getElementById(target))
	{
		node.innerHTML = this.content.supplant(data); 
	}
}
