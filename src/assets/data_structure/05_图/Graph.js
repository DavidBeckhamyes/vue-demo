// 图的邻接矩阵表示法
// 顶点
function Vertex(name) {
    this.name = name;
}

// 构建邻接矩阵
// maxvex:顶点数
// arcnum:边数
function arc(maxvex, arcnum) {
    this.maxvex = maxvex;
    this.arcnum = arcnum;
    this.data = new Array(maxvex);
    for (var i = 0; i < this.data.length; i++) {
        this.data[i] = new Array(maxvex);
        for (var j = 0; j < this.data[i].length; j++) {
            if (j != i) {
                this.data[i][j] = Infinity;
            } else {
                this.data[i][j] = 0;
            }
        }
    }
}

// 图
// vertexs: 顶点集合
function Mgraph(maxvex, arcnum, vertexs) {
    this.arc = new arc(maxvex, arcnum);
    this.vertexs = vertexs;
}

// 添加边
Mgraph.prototype.addArc = function (start, end, length) {
    var i = this.vertexs.indexOf(start);
    var j = this.vertexs.indexOf(end);
    this.arc.data[i][j] = length;
}

// 深度优先遍历(邻接矩阵)
Mgraph.prototype.DFSTraverse = function () {
    let visited = new Array(this.vertexs.length);  //用于标记顶点是否被访问过
    for (let i = 0; i < this.vertexs.length; i++) {   //初始化
        visited[i] = false;
    }
    for (let i = 0; i < this.vertexs.length; i++) {   //从第一个点开始递归访问
        if (visited[i] === false) {
            visited[i] = true;
            DFS(i, this.arc.data);
        }
    }

    function DFS(i, matrix) {
        console.log(this.vertexs[i])
        for (let j = 0; j < this.vertexs.length; j++) {
            if (matrix[i][j] === 1 && visited[j] === false) {  //访问未访问过的邻接点
                visited[j] = true;
                DFS(j, matrix);
            }
        }
    }
}

// 广度优先遍历(邻接矩阵)
Mgraph.prototype.BFSTraverse = function () {
    let queue = [];   //使用队列进行层序遍历
    let visited = new Array(this.vertexs.length);
    let vexnum = 0;
    for (let i = 0; i < this.vertexs.length; i++) {
        visited[i] = false;
    }
    for (let i = 0; i < this.vertexs.length; i++) {
        if (visited[i] === false) {
            visited[i] = true;
            queue.push(i);
            while (queue.length > 0) {
                vexnum = queue.shift();    //弹出队列头部序号，并访问节点
                console.log(this.vertexs[vexnum]);
                for (let j = 0; j < this.vertexs.length; j++) {   //将当前节点未访问过的的邻接点序号推入队列
                    if (this.arc.data[vexnum][j] === 1 && visited[j] === false) {
                        visited[j] = true;
                        queue.push(j);
                    }
                }
            }
        }
    }
}

// 构建5个顶点
var v1 = new Vertex('V1');
var v2 = new Vertex('V2');
var v3 = new Vertex('V3');
var v4 = new Vertex('V4');
var v5 = new Vertex('V5');
var vertexs = [v1, v2, v3, v4, v5];
// 构建有向图的顶点和边数(权重)
var mgraph = new Mgraph(5, 6, vertexs);
mgraph.addArc(v2, v1, 1);
mgraph.addArc(v2, v3, 1);
mgraph.addArc(v3, v4, 1);
mgraph.addArc(v4, v5, 1);
mgraph.addArc(v1, v2, 1);
mgraph.addArc(v3, v1, 1);
console.info(mgraph);
console.info(mgraph.arc);
mgraph.DFSTraverse();
mgraph.BFSTraverse();