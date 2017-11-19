package ServiceImpl;

import java.util.List;

import dao.emerlDao;
import dao.impl.emerlDaoimpl;

import entity.emerlJiHe;
import Service.emerlService;

public class emerlServiceImlp implements emerlService {
	
	emerlDao ed = new emerlDaoimpl();
		
	public List<emerlJiHe> selectAllemerl() {
		
		return ed.selectAllemerl();
	}

	public List<emerlJiHe> selectIdemerl(int id) {
		
		return ed.selectIdemerl(id);
	}

	public List<emerlJiHe> selectname(String name) {
		// TODO Auto-generated method stub
		return ed.selectname(name);
	}

}
