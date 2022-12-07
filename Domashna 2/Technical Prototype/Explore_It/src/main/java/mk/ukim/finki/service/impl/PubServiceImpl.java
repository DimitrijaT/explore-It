package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Pub;
import mk.ukim.finki.repository.impl.InMemoryPubRepository;
import mk.ukim.finki.service.PubService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PubServiceImpl implements PubService {

    private final InMemoryPubRepository pubRepository;

    public PubServiceImpl(InMemoryPubRepository pubRepository) {
        this.pubRepository = pubRepository;
    }

    @Override
    public List<Pub> listAll() {
        return this.pubRepository.listAll();
    }
}
