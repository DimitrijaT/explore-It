package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Atm;
import mk.ukim.finki.repository.impl.InMemoryAtmRepository;
import mk.ukim.finki.service.AtmService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtmServiceImpl implements AtmService {

    private final InMemoryAtmRepository atmRepository;

    public AtmServiceImpl(InMemoryAtmRepository atmRepository) {
        this.atmRepository = atmRepository;
    }


    @Override
    public List<Atm> listAll() {
        return this.atmRepository.listAll();
    }
}
