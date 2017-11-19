package servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Service.emerlService;
import ServiceImpl.emerlServiceImlp;


import dao.impl.emerlDaoimpl;



import entity.emerlJiHe;


public class AllServlet extends HttpServlet {

	public AllServlet() {
		super();
	}
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		//设置数据编码格式
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		
		List<emerlJiHe> list = new ArrayList<emerlJiHe>();
		emerlService es = new emerlServiceImlp();
		
		list = es.selectAllemerl();
		request.getSession().setAttribute("list",list);
		
		response.sendRedirect("login.jsp");
		
		out.flush();
		out.close();
	}

	public void init() throws ServletException {
		// Put your code here
	}

}
