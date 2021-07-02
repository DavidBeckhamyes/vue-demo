var tree;
function setup() {
    // 创建画布
    createCanvas(500, 500)
    tree = new Tree(width / 2, 30, 30);
    for (var i = 0; i < 20; i++) {
        tree.Add(floor(random(0, 50)))
    }
    tree.Sort();
    console.log(tree.sortArr)
    tree.Draw();
}

function Tree(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    // 建立根节点
    this.root = null;
    // 排序数组
    this.sortArr = [];
}

Tree.prototype.Add = function (v) {
    var node = new Node(v, this.r);
    if (this.root == null) {
        node.x = this.x;
        node.y = this.y;
        this.root = node;
    } else {
        this.root.AddNode(node, this.r);
    }
}

Tree.prototype.Sort = function () {
    this.root.Sort(this);
}

Tree.prototype.Search = function (n) {
    return this.root.Search(n);
}

Tree.prototype.Draw = function () {
    this.root.Draw();
}

// 建立子节点
function Node(v, r) {
    this.x;
    this.y;
    this.r = r;
    this.val = v;
    this.left = null;
    this.right = null;
}

Node.prototype.AddNode = function (n, r) {
    if (this.val > n.val) {
        if (this.left != null) {
            this.left.AddNode(n, r)
        } else {
            this.left = n;
            this.left.x = this.x - this.r * 3;
            this.left.y = this.y + this.r * 2;
        }
    }
    if (this.val < n.val) {
        if (this.right != null) {
            this.right.AddNode(n, r)
        } else {
            this.right = n;
            this.right.x = this.x - this.r * 3;
            this.right.y = this.y + this.r * 2;
        }
    }
}

Node.prototype.Sort = function (t) {
    if (this.left != null) {
        this.left.Sort(t)
    }
    t.sortArr.push(this.val);
    if (this.right != null) {
        this.right.Sort(t)
    }
}

Node.prototype.Search = function (target) {
    if (this.val > target) {
        if (this.left != null) {
            return this.left.Search(target)
        } else {
            return ""
        }
    } else if (this.val < target) {
        if (this.right != null) {
            return this.right.Search(target)
        } else {
            return ""
        }
    } else {
        return this.val
    }
}

Node.prototype.Draw = function () {
    if (this.val != null) {
        fill(0)
        noStroke()
        ellipse(this.x, this.y, this.r, this.r);
        fill(255)
        textAlign(CENTER)
        text(this.val, this.x, this.y + 5);
        if (this.left != null) {
            line(this.x, this.y, this.left.x, this.left.y)
            this.left.Draw()
        }
        if (this.right != null) {
            stroke(0)
            line(this.x, this.y, this.right.x, this.right.y)
            this.right.Draw()
        }
    }
}