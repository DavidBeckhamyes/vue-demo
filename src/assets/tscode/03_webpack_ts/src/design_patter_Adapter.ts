// 设计模式之适配器模式
(() => {
    class USB {
        request(): void {
            console.log("USB数据线");
        }
    }

    class Adapter extends USB {
        typeC: TypeC = new TypeC();
        request(): void {
            this.typeC.specificRequest();
        }
    }

    class TypeC {
        specificRequest(): void {
            console.log("使用Type-C数据线");
        }
    }

    // 动作行为：插入usb进入转接头
    const usb: USB = new Adapter();
    // 动作结果：转接口指向type-c接口传输 完成适配
    usb.request();
})()