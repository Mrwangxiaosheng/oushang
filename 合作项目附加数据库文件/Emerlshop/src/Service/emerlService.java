package Service;

import java.util.List;

import entity.emerlJiHe;

public interface emerlService {
	
		//查询全部方法
		public List<emerlJiHe> selectAllemerl();
		
		//查询特定方法
		public List<emerlJiHe> selectIdemerl(int id);
		
		public List<emerlJiHe> selectname(String name);


}
