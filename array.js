/**
 * @param {Array} highstack
 * @param {Array} nidle
 * @return {Integer}
 */
function arrayFind(highstack, nidle)
{
	var start = nidle.shift();
	for (var i = 0, imax = (highstack.length - nidle.length); i < imax; i++)
	{
		if (start === highstack[i])
		{
			for (var j = 0, jmax = nidle.length, okFlag = true; okFlag && j < jmax; j++)
			{
				if (nidle[j] !== highstack[i + j + 1])
				{
					okFlag = false;
				}
			}
			
			if (okFlag)
			{
				return i;
			}
		}
	}
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