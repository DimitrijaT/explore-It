package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Catering;
import mk.ukim.finki.repository.jpa.CateringRepository;
import mk.ukim.finki.service.CateringService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CateringServiceImpl implements CateringService {

    private final CateringRepository cateringRepository;

    public CateringServiceImpl(CateringRepository cateringRepository) {
        this.cateringRepository = cateringRepository;
    }

    @Override
    public List<Catering> listAll() {
        return this.cateringRepository.findAll();
    }
}
