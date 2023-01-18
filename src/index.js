module.exports = function check(str, bracketsConfig) {
  let result = [];
	let number = bracketsConfig.length;
	result.push(str[0]);
	for (let i = 1; i < str.length; i++) {
		let elem = str[i];
		if (elem == '|' || elem == '7' || elem == '8') {
				if (result[result.length - 1] == elem) {
				result.pop();
				
				}
			  else {
				result.push(elem);
				}
				console.log(result);
		}
		else {
			for (let j = 0; j < number; j++) {
				if (elem == bracketsConfig[j][0]) {
					result.push(elem);
				}
				else if (elem == bracketsConfig[j][1]) {
					if (result.length != 0 && result[result.length - 1] == bracketsConfig[j][0]) {
					result.pop();
				}
				  else if (result.length == 0) {
						return false;
					}
				}
				
			}
		}
}

return !Boolean(result.length);
}
