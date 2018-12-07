**JavaScript 代码规范**
================================
### JavaScript 代码规范
* 代码规范通常包括以下几个方面:
 * 变量和函数的命名规则
 * 空格，缩进，注释的使用规则。
 * 其他常用规范……
规范的代码可以更易于阅读与维护。

## 目录
---------------------------------------
##### [1. 变量名](#var)
##### [2. 函数](#function)
##### [3. 常量](#const)
##### [4. 包名](#package)
##### [5. 类](#class)
##### [6. 代码缩进、空格与运算符](#code)
##### [7. 语句规则](#chunk)
##### [8. 注释规范](#comment)
##### [9. 优化及代码规范参考](#optimization)


----------------------------------------

##### <a name="var">1. 变量名</a> 
* 命名方法：小驼峰式命名法。

* 命名规范：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)

* 命名建议：尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。

```javascript
var maxCount = 10,
  	tableTitle = 'LoginTable';
```
##### <a name="function">2. 函数</a> 

* 命名方法：小驼峰式命名法。

* 命名规范：前缀应当为动词。

* 命名建议：可使用常见动词约定

	|  动词 | 含义                           | 返回值                                               |
	| :---: |:-------------------------------| ---------------------------------------------        |
	| can   | 判断是否可执行某个动作(权限)   | 返回一个布尔值。true：可执行；false：不可执行        |
	| has	| 判断是否含有某个值			 | 函数返回一个布尔值。true：含有此值；false：不含有此值| 
	| is    | 	判断是否为某个值			 | 函数返回一个布尔值。true：为某个值；false：不为某个值| 
	| get	| 获取某个值	       			 | 函数返回一个非布尔值                                 | 
	| set	| 设置某个值	        		 | 无返回值、返回是否设置成功或者返回链式对象           | 
	| load	| 加载某些数据	      		     | 无返回值或者返回是否加载完成的结果                   | 

```javascript
// 是否可阅读
function canRead()
{
    return true;
}
 
// 获取名称
function getName() 
{
    return this.name;
}
```

##### <a name="const">3. 常量</a> 
* 命名方法：名称全部大写。

* 命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。

```javascript
// 是否可阅读
const MAX_COUNT = 10;
const URL = 'http://www.baidu.com';
```
##### <a name="package">4. 包名</a> 
	* 使用小写字母如  
	* 单词间不要用字符隔开 

##### <a name="class">5. 类</a>
* 类名
	* 首字母大写
		* 类名要首字母大写，比如 SupplierService, PaymentOrderAction；
	* 后缀
		* 类名往往用不同的后缀表达额外的意思，如下表：

		|  后缀名  | 	意义	                         | 举例                    |
		|  :---:   | :-------------------------------    | ---------------         |
		|  Impl	   | 这个类是一个实现类，而不是接口	     | PaymentOrderServiceImpl | 
		|  I       | 这个类是一个接口	                 | ILifeCycle       | 
		|  Dao	   | 这个类封装了数据访问方法	         | PaymentOrderDao         | 
		|  Action  | 直接处理页面请求，管理页面逻辑了类  | UpdateOrderListAction   | 
		|  Listener| 响应某种事件的类	                 | PaymentSuccessListener  | 
		|  Event   | 这个类代表了某种事件	             | PaymentSuccessEvent     | 
		|  Factory | 生成某种对象工厂的类	             | PaymentOrderFactory     | 
		|  Adapter | 用来连接某种以前不被支持的对象的类  | 	DatabaseLogAdapter     | 
		|  Wrapper | 这是一个包装类，为了给某个类提供没有的能力	| SelectableOrderListWrapper| 

* 方法名
	* 首字母小写，如 addOrder() 不要 AddOrder()
	* 动词在前，如 addOrder()，不要orderAdd()
	* 动词前缀往往表达特定的含义，如下表：

		|  前缀名    | 	意义	                                | 举例                    |
		|  :---:     | :------                                  | ---------------         |
		| create	 | 创建	                                    | createOrder()           | 
		| delete	 | 删除	                                    | deleteOrder()           | 
		| add	     | 创建，暗示新创建的对象属于某个集合       | addPaidOrder()		  | 
		| remove	 | 删除	                                    | removeOrder()           | 
		| init       | 初始化，暗示会做些诸如获取资源等特殊动作	| initializeObjectPool    | 
		| destroy	 | 销毁，暗示会做些诸如释放资源的特殊动作	| destroyObjectPool       | 
		| open	     | 打开										| openConnection()        | 
		| close      | 关闭									    | closeConnection()       | 
		| read	     | 读取                                     | readUserName()          | 
		| write      | 写入	                                    | writeUserName()         | 
		| get		 | 获得	                                    | getName()               | 
		| set	     | 设置	                                    | setName()               | 
		| prepare    | 准备                                     | prepareOrderList()      | 
		| copy	     | 复制                                  	| copyCustomerList()      |
		| modify     | 修改                                  	| modifyActualTotalAmount | 
		| calculate	 | 数值计算	                                | calculateCommission()   | 
		| do	     | 执行某个过程或流程	                    | doOrderCancelJob()      | 
		| dispatch   | 判断程序流程转向	                        | dispatchUserRequest()   | 
		| start	     | 开始	                                    | startOrderProcessing()  | 
		| stop	     | 结束                                  	| stopOrderProcessing()   | 
		| send       | 发送某个消息或事件	                    | sendOrderPaidMessage()  | 
		| receive    | 接受消息或时间                        	| receiveOrderPaidMessgae | 
		| response	 | 响应用户动作	                            | responseOrderListItemClicked()| 
		| find       | 查找对象	                                | findNewSupplier()       | 
		| update	 | 更新对象	                                | updateCommission()      | 

* CODE

	```javascript
	import React from 'react';
	import { connect } from 'react-redux';

	//作用域变量
	let fileName = ["blue", "scenery", "seaBreeze", "floral", "night", "purple"];

	class App extends React.Component {
		
		appName = "小能";  //公有变量
		_appId = "Xiaoneng";  //私有变量
		
		//静态变量
		static propTypes = {
			children: PropTypes.element,
		};
		
		constructor(props)
		{
			super(props);
		}
		
		//GET SET
		get appId()
		{
			return this._appId;
		}
		
		set appId(value)
		{
			this._appId = value;
		}
		
		//公有方法
		componentWillReceiveProps(nextProps)
		{
			
		}
		
		//私有方法
		_getDownOutGround()
		{
			
			return null;
		}
		
		render()
		{
			return (
				<div>
					<div>
						App
					</div>
				</div>
			);
		}
	}

	//作用域方法
	function mapStateToProps(state)
	{
		const {loginReducer: {user}} = state;
		
		return {
			user
		};
	}

	export default connect(mapStateToProps)(App);					
	```

##### <a name="code">6. 代码缩进、空格与运算符</a>
* 通常运算符 ( = + - * / ) 前后需要添加空格;
* 通常使用 4 个空格符号来缩进代码块

	```javascript
	var x = y + z,
		values = ["Volvo", "Saab", "Fiat"];

	function toCelsius(fahrenheit) 
	{
	    return (5 / 9) * (fahrenheit - 32);
	}
	```

##### <a name="chunk">7. 语句规则</a>
* 简单语句的通用规则:
 * 一条语句通常以分号作为结束符。

	 ```javascript
	var values = ["Volvo", "Saab", "Fiat"];

	var person = {
	    firstName: "John",
	    lastName: "Doe",
	    age: 50,
	    eyeColor: "blue"
	};
	```

* 复杂语句的通用规则:
 * 将左花括号放在第二行的开头。
 * 在代码块最后，将右花括号独立放在一行。
 * 不要以分号结束一个复杂的声明。

	 ```javascript
	 //函数
	function toCelsius(fahrenheit) 
	{
	    return (5 / 9) * (fahrenheit - 32);
	}

	//循环
	for (i = 0; i < 5; i++) 
	{
	    x += i;
	}

	//条件语句
	if (time < 20) 
	{
	    greeting = "Good day";
	} 
	else
	{
	    greeting = "Good evening";
	}
	```

##### <a name="comment">8. 注释规范</a>
JS支持两种不同类型的注释：单行注释和多行注释。
* 单行注释
	* 说明：单行注释以两个斜线开始，以行尾结束。
	* 语法：//这是单行注释
	* 使用方式：在代码后面添加注释：//(双斜线)与代码之间保留两个空格

	 ```javascript
	//调用了一个函数；1)单独在一行
	setTitle();
 
	var maxCount = 10; //设置最大量；2)在代码后面注释
 
	//setName(); //3)注释代码
	```
* 多行注释	
	* 说明：以/*开头，*/结尾

	* 语法：/* 注释说明 */

	* 使用方法：

		* ① 若开始(/*)和结束(*/)都在一行，推荐采用单行注释。

		*② 若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。

	 ```javascript
	/*
	* 代码执行到这里后会调用setTitle()函数
	* setTitle()：设置title的值
	*/
	setTitle();
	```
* 函数(方法)注释
* 说明：函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 javadoc(百度百科)。

* 语法：

 ```javascript
 	/** 
	* 函数说明 
	* @关键字 
	*/
 ```

* 常用注释关键字：(只列出一部分，并不是全部)

|  注释名   | 	语法	                                | 含义                     |  示例                                         |
|  :---:    | :-------------------------------          | ---------------          |  ---------------                              |
| @param	| @param 参数名 {参数类型}  描述信息	    | 描述参数的信息	       | @param {String} name  传入名称                | 
| @return	| @return {返回类型} 描述信息	            | 描述返回值的信息	       | @return {Boolean} true:可执行;false:不可执行  | 
| @author	| @author 作者信息 [附属信息：如邮箱、日期]	| 描述此函数作者的信息	   | @author 张三 2015/07/21                       | 
| @version	| @version XX.XX.XX                         | 描述此函数的版本号       | @version 1.0.3                                | 
| @example	| @example 示例代码	                        | 演示函数的使用	       | @example setTitle('测试')                     | 

 ```javascript
/**
* 合并Grid的行
* @param {Ext.Grid.Panel} grid 需要合并的Grid
* @param {Array} cols  需要合并列的Index(序号)数组；从0开始计数，序号也包含。
* @param {Boolean} isAllSome 是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
* @return void
* @author polk6 2015/07/21 
* @example
* _________________                             _________________
* |  年龄 |  姓名 |                             |  年龄 |  姓名 |
* -----------------      mergeCells(grid,[0])   -----------------
* |  18   |  张三 |              =>             |       |  张三 |
* -----------------                             -  18   ---------
* |  18   |  王五 |                             |       |  王五 |
* -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```
##### <a name="optimization">9. 优化及代码规范参考</a>
* [ZH]https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md#type-casting--coercion

* [EN]https://github.com/airbnb/javascript