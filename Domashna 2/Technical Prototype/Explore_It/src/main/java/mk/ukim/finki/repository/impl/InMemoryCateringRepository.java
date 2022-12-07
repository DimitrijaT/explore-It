package mk.ukim.finki.repository.impl;

import mk.ukim.finki.bootstrap.DataHolder;
import mk.ukim.finki.model.Catering;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InMemoryCateringRepository {
    public List<Catering> listAll() {
        return DataHolder.caterings;
    }
}
