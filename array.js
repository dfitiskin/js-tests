/**
 * @param {} nidle
 * @return {Integer}
 */
Array.prototype.find = function (nidle) 
{
	var i;
	for (i in this)
	{
		if (nidle === this[i])
		{
			return i;
		}
	}
};

/**
 * @param {Array} highstack
 * @param {Array} nidle
 * @return {Integer}
 */
function arrayFind(highstack, nidle)
{
	var i, k;
	if (i = highstack.find(nidle[0]))
	{
		for (k in niddle)
		{
			if (niddle[k] !== highstack[k + i])
			{
				return false;
			}
		}
		return i;
	}
	return false;
}

/**
 * 
 * @param {Array} arr
 * @return {Array}
 */
function toFunctionArray(arr)
{
	var result = [];
	for (i in arr)
	{
		var k = arr[i];
		result.push(
            function ()
            {
            	return k;
            }
		);
	}
	return result;
}