package mk.ukim.finki.repository.jpa;


import mk.ukim.finki.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


/**
 *
 * Most Methods are inferred from JpaRepository<Class name, Primary Key>
 *
 */
public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByType(String type);
    List<Location> findByName(String name);

    List<Location> findByTypeOrName(String type, String name);
}
