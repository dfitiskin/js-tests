/**
 * @param {} nidle
 * @return {Integer}
 */
Array.prototype.find = function (nidle) 
{
	for (var i = 0, imax = this.length; i < imax; i++)
	{
		if (nidle === this[i])
		{
			return i;
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
	var i = highstack.find(nidle[0]);
	if (false !== i)
	{
		for (var k = 0, kmax = nidle.length; k < kmax; k++)
		{
			if (nidle[k] !== highstack[k + i])
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
	for (var i = 0, imax = arr.length; i < imax; i++)
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