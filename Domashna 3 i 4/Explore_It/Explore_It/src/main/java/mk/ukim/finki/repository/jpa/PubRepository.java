package mk.ukim.finki.repository.jpa;

import mk.ukim.finki.model.Pub;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PubRepository extends JpaRepository<Pub,Long> {
}
