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
 * @param {Array} nidle
 * @return {Array}
 */
Array.prototype.findAll = function (nidle) 
{
	var result = [];
    for (var i = 0, imax = this.length; i < imax; i++)
    {
        if (nidle === this[i])
        {
            result.push(i);
        }
    }
    return result;
};

/**
 * @param {Array} highstack
 * @param {Array} nidle
 * @return {Integer}
 */
function arrayFind(highstack, nidle)
{
	var starts = highstack.findAll(nidle[0]);
	for (var i = 0, imax = starts.length; i < imax; i++)
	{
		for (var k = 0, kmax = nidle.length, okFlag = true; okFlag && k < kmax; k++)
		{
			if (nidle[k] !== highstack[k + starts[i]])
			{
				okFlag = false;
			}
		}
		
		if (okFlag)
		{
			return starts[i];
		}
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