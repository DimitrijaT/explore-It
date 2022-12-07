package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Catering;
import mk.ukim.finki.repository.impl.InMemoryCateringRepository;
import mk.ukim.finki.service.CateringService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CateringServiceImpl implements CateringService {

    private final InMemoryCateringRepository cateringRepository;

    public CateringServiceImpl(InMemoryCateringRepository cateringRepository) {
        this.cateringRepository = cateringRepository;
    }

    @Override
    public List<Catering> listAll() {
        return this.cateringRepository.listAll();
    }
}
