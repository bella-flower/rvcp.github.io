var path= "http://localhost:8081/static/data";
//计算文件大小 KB开始计算
function countFileSize(size) {
  if(size > 1024 && size < 1024*1024) {
    size = (size/1024).toFixed(2)+'MB';
  } else if (size > 1024*1024 && size < 1024*1024*1024) {
    size = (size/1024/1024).toFixed(2)+'GB';
  } else if(size < 1024) {
    size = size+'.00KB';
  }
  /*else if (size > 1024*1024*1024 && size < 1024*1024*1024*1024) {
        size = (size/1024/1024/1024).toFixed(2)+'GB';
    } */
  return size;
}
//计算文件大小 B开始计算
function countFileSizeFromB(size) {
  if(size > 1024 && size < 1024*1024) {
    size = (size/1024).toFixed(2)+'KB';
  } else if (size > 1024*1024 && size < 1024*1024*1024) {
    size = (size/1024/1024).toFixed(2)+'MB';
  } else if(size < 1024) {
    size = (size).toFixed(2)+'B';
  } else if (size > 1024*1024*1024 && size < 1024*1024*1024*1024) {
    size = (size/1024/1024/1024).toFixed(2)+'GB';
  }
  return size;
}
//时间处理
function add0(m){return m<10?'0'+m:m }
function format(ms)
{
//shijianchuo是整数，否则要parseInt转换
  var time = new Date(ms);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
