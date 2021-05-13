# Java枚举类与注解

[[toc]]

## 一、枚举类

> 类的对象只有有限个, 确定的. 我们称此类为枚举类.



**说明：**

1. 类的对象只有有限个，确定的。如：
   - 星期：Monday(星期一)、......、Sunday(星期天) 
   - 性别：Man(男)、Woman(女)  季节：Spring(春节)......Winter(冬天) 
   - 支付方式：Cash（现金）、WeChatPay（微信）、Alipay(支付宝)、BankCard(银 行卡)、CreditCard(信用卡) 
   - 就职状态：Busy、Free、Vocation、Dimission 
   - 订单状态：Nonpayment（未付款）、Paid（已付款）、Delivered（已发货）、 Return（退货）、Checked（已确认）Fulfilled（已配货）
   - 线程状态：创建、就绪、运行、阻塞、死亡
2. 当需要定义一组常量时，强烈建议使用枚举类。
3. 若枚举只有一个对象, 则可以作为一种单例模式的实现方式。



**枚举类的实现：**

1. JDK1.5之前需要自定义枚举类。
2. JDK 1.5 新增的 enum 关键字用于定义枚举类。



**枚举类的属性：**

1. 枚举类对象的属性不应允许被改动, 所以应该使用 private final 修饰。
2. 枚举类的使用 private final 修饰的属性应该在构造器中为其赋值。
3. 若枚举类显式的定义了带参数的构造器, 则在列出枚举值时也必须对应的 传入参数。





### ① 自定义枚举类

> 通过自己写一个自定义的类来实现自定义枚举类。



**自定义枚举类的实现：**

1. 私有化类的构造器，保证不能在类的外部创建其对象。

2. 在类的内部创建枚举类的实例。声明为：public static final。

3. 对象如果有实例变量，应该声明为private final，并在构造器中初始化。

**Demo：**

```java
package com.broky.EnumClass;

/**
 * 自定义枚举类
 *
 * @author 13roky
 * @date 2021-05-13 17:16
 */
public class SeasonTest {
    public static void main(String[] args) {
        Season spring = Season.SPRING;
        System.out.println(spring);
    }
}

// 自定义枚举类
class Season{
    // 1. 声明 Season 对象的属性
    // final 不能使用初始化赋值, 可以手动 显式赋值, 构造器赋值, 代码块赋值
    // 现式赋值和代码块赋值 会导致创建当前类的不同对象时 他们的这些属性都是一样的
    // 构造器赋值 可以在实例化的时候设置属性
    private final String seasonName;
    private final String seasonDesc;

    // 2. 私有化类的构造器, 并给对象属性赋值
    private Season(String seasonName, String seasonDesc){
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    // 3. 提供当前枚举类的多个对象 : public static final 的
    public static Season SPRING = new Season("春天","春暖花开");
    public static Season SUMMER = new Season("夏天","夏日炎炎");
    public static Season AUTUMN = new Season("秋天","秋高气爽");
    public static Season WINTER = new Season("冬天","冰天雪地");

    // 4. 其它诉求1 : 获取枚举类对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

    // 5. 其他诉求2 : 提供toString（）
    @Override
    public String toString() {
        return "Season{" + "seasonName='" + seasonName + '\'' + ", seasonDesc='" + seasonDesc + '\'' + '}';
    }
}
```





### ② enum关键字定义枚举类

> 通过使用enum关键字，和一些简便的规则，更方便枚举类的创建



**说明：**

1. enum 枚举类是继承 java.lang.Enum 类的，所以其中如果不重写 toString 使用的是 java.lang.Enum 中的 toString，不会输出内存地址，而是会打印对象名



**enum 枚举类的实现：**

1. 使用 `enum` 声明类为枚举类。

2. 在枚举类的开头首先定义枚举类中所需要的对象。

   - 枚举类对实例化枚举类的对象做了简化

     只需要使用 对象名(参数···) 就可以完成实例化，如：

     `PRING("春天", "春暖花开"), WINTER("冬天", "冰天雪地");`

     多个对象用 “,” 隔开，最后一个以 “;” 结尾

     如果没有属性，可以去掉括号，如：

     `PRING, WINTER;`

3. 其余规则均与自定义枚举类相同。

   

**Demo：**

```java
package com.broky.EnumClass;

/**
 * @author 13roky
 * @date 2021-05-13 18:32
 */
public class SeasonTest1 {
    public static void main(String[] args) {
        Season1 spring = Season1.SPRING;
        System.out.println(spring);
        System.out.println(Season1.class.getSuperclass());
    }
}

enum Season1 {
    // 1. 提供当前枚举类的对象, 多个对象之间用","隔开, 末尾对象用";"结束
    SPRING("春天", "春暖花开"), 
    SUMMER("夏天", "夏日炎炎"), 
    AUTUMN("秋天", "秋高气爽"), 
    WINTER("冬天", "冰天雪地");

    // 2. 声明 Season 对象的属性 : private final 修饰
    private final String seasonName;
    private final String seasonDesc;

    // 3. 私有化类的构造器, 并给对象属性赋值
    private Season1(String seasonName, String seasonDesc) {
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    // 4. 其它诉求1 : 获取枚举类对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

    // 5. 其他诉求2 : 提供toString（）
    // 不重写 toString 时, 如果 enum 类继承的是 Object 类, 那么打印时应该使用 Object 的 toString 打印的是地址值.
    // 但是经过实践得知, 打印出的不是地址值, 由 Season1.class.getSuperclass() 知, 其父类是 java.lang.Enum

    //    @Override
    //    public String toString() {
    //        return "Season{" + "seasonName='" + seasonName + '\'' + ", seasonDesc='" + seasonDesc + '\'' + '}';
    //    }
}
```





### ③ enum 枚举类的方法

- **values() ：**返回枚举类型的对象数组。该方法可以很方便地遍历所有的 枚举值。
- **valueOf(String str) ：**可以把一个字符串转为对应的枚举类对象。要求字符 串必须是枚举类对象的“名字”。如不是，会有运行时异常：IllegalArgumentException。
- **toString()**：返回当前枚举类对象常量的名称。



**Demo：**（枚举类使用上面代码的枚举类Season1）

```java
package com.broky.EnumClass;

import java.util.Arrays;

/**
 * @author 13roky
 * @date 2021-05-13 18:32
 */
public class SeasonTest1 {
    public static void main(String[] args) {
        Season1 spring = Season1.SPRING;
        System.out.println(spring);
        System.out.println(Season1.class.getSuperclass());

        System.out.println("************************************");
        // values()方法：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。
        Season1[] values = Season1.values();
        System.out.println(Arrays.toString(values));

        Thread.State[] values1 = Thread.State.values();
        System.out.println(Arrays.toString(values1));

        System.out.println("************************************");
        // valueOf(String str) ：返回枚举类中对象名是objName的对象。
        // 可以把一个字符串转为对应的枚举类对象。
        // 要求字符 串必须是枚举类对象的“名字”。如不是，会有运行时异常：IllegalArgumentException。
        Season1 winter1= Season1.valueOf("WINTER");
        System.out.println(winter1);

        System.out.println("************************************");

        // toString()：返回当前枚举类对象常量的名称。
        System.out.println(winter1.toString());
    }
}
```



### ④ enum 枚举类实现接口

> enum 枚举类可以像正常类那样实现接口并重写接口中的方法
>
> 但是 enum 枚举类还有其独特的实现接口的方法,  接口类中的每个对象都可以独自重写实现接口的方法



**enum 对象特有的实现接口的方法 :**

- 对象名(构造器参数){ 需要重写的方法 }, 如:

```java
    AUTUMN("秋天", "秋高气爽"){
        @Override
        public void show() {
            System.out.println("秋高气爽");
        }
    },
    WINTER("冬天", "冰天雪地"){
        @Override
        public void show() {
            System.out.println("凛冬已至");
        }
    };
```



**Demo:** 

```java
package com.broky.EnumClass;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

/**
 * @author 13roky
 * @date 2021-05-13 18:32
 */
public class SeasonTest1 {
    @Test
    public void test(){
        Season1 spring = Season1.SPRING;
        spring.show();
        Season1.SUMMER.show();
    }
}

interface info{
    void show();
}

enum Season1 implements info{
    // enum 独有的实现接口的方法
    // 1. 提供当前枚举类的对象, 多个对象之间用","隔开, 末尾对象用";"结束
    SPRING("春天", "春暖花开"){
        @Override
        public void show() {
            System.out.println("春天在哪里");
        }
    },
    SUMMER("夏天", "夏日炎炎"){
        @Override
        public void show() {
            System.out.println("夏天");
        }
    },
    AUTUMN("秋天", "秋高气爽"){
        @Override
        public void show() {
            System.out.println("秋高气爽");
        }
    },
    WINTER("冬天", "冰天雪地"){
        @Override
        public void show() {
            System.out.println("凛冬已至");
        }
    };

    // 2. 声明 Season 对象的属性 : private final 修饰
    private final String seasonName;
    private final String seasonDesc;

    // 3. 私有化类的构造器, 并给对象属性赋值
    private Season1(String seasonName, String seasonDesc) {
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    // 4. 其它诉求1 : 获取枚举类对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

    @Override
    public void show() {
        System.out.println("这是一个季节");
    }

}
```



## 二、注解

