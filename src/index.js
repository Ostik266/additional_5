module.exports = function check(str, bracketsConfig) {
 let strl = str.length;
 
  if (strl%2 !== 0)
  return false;

  let arrl = bracketsConfig.length;
  let opener =[];
  let closer = [];
  bracketsConfig.forEach((x) => {opener.push(x[0]); closer.push(x[1])})
			for (i = 0; i<strl; i++)
			{
				for (j =0; j < arrl; j++)
				{
          if(str[i] === opener[j] && str[i+1] === closer[j])
          {
            str = str.substring(0, i) + str.substring(i+2);
					  i = -1;
          }
        } 
			}

      if (str.length === 0)
      return true;
      if (str.length > 0)
      return false;

}
