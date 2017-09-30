const simplifyPath = path => {
  let reduced = path.split('/').reduce((paths, dir) => {
    if (dir === '..') paths.pop();
    else if (dir !== '' && dir !== '.') paths.push(dir);
    return paths;
  }, []);

  return '/' + reduced.join('/');
};

module.exports = {
  simplifyPath
};
