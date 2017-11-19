package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

import Service.emerlService;
import ServiceImpl.emerlServiceImlp;
import entity.emerlJiHe;

public class NameServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public NameServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		//设置数据编码格式
//		response.setContentType("text/html");
//		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		
		response.setCharacterEncoding("gb2312");//通知服务器发送数据时查阅的码表
	    response.setContentType("text/html;charset=gb2312");//通知浏览器以何种码表打开
		
	    PrintWriter out = response.getWriter();
	    
		List<emerlJiHe> list = new ArrayList<emerlJiHe>();
		emerlService es = new emerlServiceImlp();
		//根据网页点击的信息指定name
		String name = request.getParameter("name");
//		if(name==null){
//			 name = "藤椅";
//		}
		list = es.selectname(name);
		
//		request.getSession().setAttribute("list",list);
//		
//		request.getSession().setAttribute("name", name);
//		
//		response.sendRedirect("login.jsp");
		
		String jsonString = JSON.toJSONString(list);
		System.out.println("在访问");
		
//		out.println("("+jsonString+")");
		System.out.println(name+"("+jsonString+")");
		
		String result = request.getParameter("callback") + "(" + jsonString + ")";
		/*String result = "" + "(" + jsonString + ")";*/
		out.print(result);
		
		out.flush();
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
