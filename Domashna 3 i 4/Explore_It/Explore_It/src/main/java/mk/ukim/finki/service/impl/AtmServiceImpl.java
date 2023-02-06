package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Atm;
import mk.ukim.finki.repository.jpa.AtmRepository;
import mk.ukim.finki.service.AtmService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtmServiceImpl implements AtmService {
    private final AtmRepository atmRepository;

    public AtmServiceImpl(AtmRepository atmRepository) {
        this.atmRepository = atmRepository;
    }

    @Override
    public List<Atm> listAll() {
        return this.atmRepository.findAll();
    }
}
