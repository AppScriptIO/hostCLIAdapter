"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.executeOnRequire = executeOnRequire;var _path = _interopRequireDefault(require("path"));

var _assert = _interopRequireDefault(require("assert"));const style = { titleCyan: '\x1b[33m\x1b[1m\x1b[7m\x1b[36m', titleGolden: '\x1b[33m\x1b[1m\x1b[7m', message: '\x1b[96m', italic: '\x1b[2m\x1b[3m', default: '\x1b[0m' };







function executeOnRequire({
  scriptPath,
  parameter = null })
{
  (0, _assert.default)(_path.default.isAbsolute(scriptPath), `• 'scriptPath' must be an absolute path to be executed.`);
  console.log(`${style.italic}${style.titleGolden}%s${style.default} - %s`, `•[JS script]`, `Running ${scriptPath}`);
  console.log(`\t\x1b[2m\x1b[3m%s\x1b[0m \x1b[95m%s\x1b[0m`, `File path:`, `${scriptPath}`);



  process.argv['parameter'] = parameter;

  require(scriptPath);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9leGVjdXRpb25BbGdvcml0aG0vZXhlY3V0ZU9uUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsInRpdGxlQ3lhbiIsInRpdGxlR29sZGVuIiwibWVzc2FnZSIsIml0YWxpYyIsImRlZmF1bHQiLCJleGVjdXRlT25SZXF1aXJlIiwic2NyaXB0UGF0aCIsInBhcmFtZXRlciIsInBhdGgiLCJpc0Fic29sdXRlIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJhcmd2IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IjRNQUFBOztBQUVBLHdEQURBLE1BQU1BLEtBQUssR0FBRyxFQUFFQyxTQUFTLEVBQUUsZ0NBQWIsRUFBK0NDLFdBQVcsRUFBRSx3QkFBNUQsRUFBc0ZDLE9BQU8sRUFBRSxVQUEvRixFQUEyR0MsTUFBTSxFQUFFLGdCQUFuSCxFQUFxSUMsT0FBTyxFQUFFLFNBQTlJLEVBQWQ7Ozs7Ozs7O0FBU08sU0FBU0MsZ0JBQVQsQ0FBMEI7QUFDN0JDLEVBQUFBLFVBRDZCO0FBRTdCQyxFQUFBQSxTQUFTLEdBQUcsSUFGaUIsRUFBMUI7QUFHSjtBQUNDLHVCQUFPQyxjQUFLQyxVQUFMLENBQWdCSCxVQUFoQixDQUFQLEVBQXFDLHlEQUFyQztBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFWixLQUFLLENBQUNJLE1BQU8sR0FBRUosS0FBSyxDQUFDRSxXQUFZLEtBQUlGLEtBQUssQ0FBQ0ssT0FBUSxPQUFsRSxFQUEyRSxjQUEzRSxFQUEyRixXQUFVRSxVQUFXLEVBQWhIO0FBQ0FJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLDZDQUFiLEVBQTRELFlBQTVELEVBQTBFLEdBQUVMLFVBQVcsRUFBdkY7Ozs7QUFJQU0sRUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsV0FBYixJQUEyQk4sU0FBM0I7O0FBRUFPLEVBQUFBLE9BQU8sQ0FBQ1IsVUFBRCxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuY29uc3Qgc3R5bGUgPSB7IHRpdGxlQ3lhbjogJ1xceDFiWzMzbVxceDFiWzFtXFx4MWJbN21cXHgxYlszNm0nLCB0aXRsZUdvbGRlbjogJ1xceDFiWzMzbVxceDFiWzFtXFx4MWJbN20nLCBtZXNzYWdlOiAnXFx4MWJbOTZtJywgaXRhbGljOiAnXFx4MWJbMm1cXHgxYlszbScsIGRlZmF1bHQ6ICdcXHgxYlswbScgfVxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnIFxuXG4vKipcbiAqIEV4ZWN1dGUgYHNjcmlwdENvZm5pZy50eXBlID09ICdzY3JpcHQnYFxuICogVXNhZ2U6XG4gKiAgIyBFeHRyYWN0aW5nIHRoZSBwYXJhbWV0ZXJzIGZyb20gdGhlIHNjcmlwdDogYGNvbnN0IFtwYXJhbWV0ZXIxLCBwYXJhbWV0ZXIyXSA9IHByb2Nlc3MuYXJndi5wYXJhbWV0ZXJgIFxuICogICAgZS5nLiBgY29uc3QgW2FwaV0gPSBwcm9jZXNzLmFyZ3YucGFyYW1ldGVyYCBvciBgY29uc3QgW3sgcHJvamVjdDogcHJvamVjdEFwaSB9XSA9IHByb2Nlc3MuYXJndi5wYXJhbWV0ZXJgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlT25SZXF1aXJlKHsgXG4gICAgc2NyaXB0UGF0aCwgXG4gICAgcGFyYW1ldGVyID0gbnVsbCAvLyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdXNpbmcgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUuIFxufSkge1xuICAgIGFzc2VydChwYXRoLmlzQWJzb2x1dGUoc2NyaXB0UGF0aCksIGDigKIgJ3NjcmlwdFBhdGgnIG11c3QgYmUgYW4gYWJzb2x1dGUgcGF0aCB0byBiZSBleGVjdXRlZC5gKVxuICAgIGNvbnNvbGUubG9nKGAke3N0eWxlLml0YWxpY30ke3N0eWxlLnRpdGxlR29sZGVufSVzJHtzdHlsZS5kZWZhdWx0fSAtICVzYCwgYOKAoltKUyBzY3JpcHRdYCwgYFJ1bm5pbmcgJHtzY3JpcHRQYXRofWApXG4gICAgY29uc29sZS5sb2coYFxcdFxceDFiWzJtXFx4MWJbM20lc1xceDFiWzBtIFxceDFiWzk1bSVzXFx4MWJbMG1gLCBgRmlsZSBwYXRoOmAsIGAke3NjcmlwdFBhdGh9YClcblxuICAgIC8vIHBhc3MgcGFyYW1ldGVyIHRvIHNjcmlwdCBcbiAgICAvLyBhbm90aGVyIG9wdGlvbiBmb3IgcGFzc2luZyBwYXJhbWV0ZXIgY291bGQgYmUgYHByb2Nlc3MuYXJndi5wdXNoKC4uLnBhcmFtZXRlcilgXG4gICAgcHJvY2Vzcy5hcmd2WydwYXJhbWV0ZXInXT0gcGFyYW1ldGVyIC8vIGF0dGFjaCB0byB0aGUgZ2xvYmFsIGBwcm9jZXNzLmFyZ3ZgIG9iamVjdCwgdGhpcyB3aWxsIG5vdCBhZmZlY3QgdGhlIGFyZ3YgYXJyYXkgeWV0IGFsbG93IGFjY2VzcyB0byB0aGUgcGFyYW1ldGVyc1xuXG4gICAgcmVxdWlyZShzY3JpcHRQYXRoKVxufVxuXG4iXX0=