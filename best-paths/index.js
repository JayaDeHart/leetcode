/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
let numberOfGoodPaths = function (vals, edges) {
  let am = new Map();
  for (const [to, from] of edges) {
    if (!am.get(to)) {
      am.set(to, []);
    }
    if (!am.get(from)) {
      am.set(from, []);
    }
    am.get(to).push(from);
    am.get(from).push(to);
  }

  function isPathValid(path) {
    console.log(path);
    if (path.length < 2) {
      return false;
    }
    for (let x = 1; x < path.length; x++) {
      if (path[x] > path[0]) {
        return false;
      }
    }
    if (path[0] !== path[path.length - 1]) {
      return false;
    }
    console.log("yay");
    return true;
  }

  function dfs(node, visited, am, count, path) {
    count += 1;
    path.push(vals[node]);
    visited.add(node);

    if (isPathValid(path)) {
      count += 1;
    }

    let neighbors = am.get(node);

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        count += dfs(neighbor, visited, am, count, path);
      }
    });

    visited.delete(node);
    path.pop();
    return count;
  }

  let paths = 0;

  for (const [node, neighbors] of am.entries()) {
    const mostPaths = dfs(node, new Set(), am, 0, []);
    if (mostPaths > paths) {
      paths = mostPaths;
    }
  }

  return paths;

  console.log(am);
};

module.exports = numberOfGoodPaths;
