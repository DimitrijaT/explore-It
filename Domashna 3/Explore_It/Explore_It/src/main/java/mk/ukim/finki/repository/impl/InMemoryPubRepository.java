package mk.ukim.finki.repository.impl;

import mk.ukim.finki.bootstrap.DataHolder;
import mk.ukim.finki.model.Pub;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InMemoryPubRepository {
    public List<Pub> listAll() {
        return DataHolder.pubs;
    }
}
