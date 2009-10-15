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
			return i * 1;
		}
	}
	return false;
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
		for (k in nidle)
		{
			if (!isNaN(k) && nidle[k] !== highstack[(k * 1) + i])
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
		result[i] = function(k)
		{
            return function()
            {
            	return k;
            };
		}(arr[i]);
	}
	return result;
}