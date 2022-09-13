// 设计模式之责任链模式
(() => {
    // 设置接收者的抽象类
    abstract class Handler {
        protected next: Handler;

        // 设置下一个可以处理的接收者
        setNext(next: Handler) {
            this.next = next;
        }

        // 当前接收者的处置方法
        abstract handlerRequest(request: number);
    }

    class FuDaoYuan extends Handler { // <= 7天假期 可以审批
        handlerRequest(request: number) {
            if (request <= 7) {
                console.log("辅导员审批通过!")
            } else {
                if (this.next != null) {
                    // 交给下一个更高级权限的人员审批
                    this.next.handlerRequest(request);
                } else {
                    console.log("当前请假请求无法审批!");
                }
            }
        }
    }

    class YuanZhang extends Handler { // <= 10天假期 可以审批
        handlerRequest(request: number) {
            if (request <= 10) {
                console.log("院长审批通过!")
            } else {
                if (this.next != null) {
                    // 交给下一个更高级权限的人员审批
                    this.next.handlerRequest(request);
                } else {
                    console.log("当前请假请求无法审批!");
                }
            }
        }
    }

    const fudaoyuan: FuDaoYuan = new FuDaoYuan();
    const yuanzhang: YuanZhang = new YuanZhang();
    fudaoyuan.setNext(yuanzhang);
    fudaoyuan.handlerRequest(9);
})()