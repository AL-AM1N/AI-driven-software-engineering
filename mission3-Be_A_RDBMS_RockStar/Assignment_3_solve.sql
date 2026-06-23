-- =========================================================================
-- 1. CREATE USERS TABLE
-- =========================================================================
CREATE TABLE Users (
    user_id serial,
    full_name varchar(150) NOT NULL,
    email varchar(255) NOT NULL,
    role varchar(20) NOT NULL DEFAULT 'Football Fan',
    phone_number varchar(20),
  
    CONSTRAINT pk_users PRIMARY KEY (user_id),
    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT check_role CHECK (role IN ('Ticket Manager', 'Football Fan'))
);

-- =========================================================================
-- 2. CREATE MATCHES TABLE
-- =========================================================================
CREATE TABLE Matches (
    match_id int,
    fixture varchar(150) NOT NULL,
    tournament_category varchar(100) NOT NULL,
    base_ticket_price int NOT NULL,
    match_status varchar(50) NOT NULL DEFAULT 'Available',
  
    CONSTRAINT pk_matches PRIMARY KEY (match_id),
    CONSTRAINT check_positive_price CHECK (base_ticket_price > 0),
    CONSTRAINT check_match_status CHECK (
        match_status IN (
            'Available',
            'Selling Fast',
            'Sold Out',
            'Postponed'
        )
    )
);

-- =========================================================================
-- 3. CREATE BOOKINGS TABLE
-- =========================================================================
CREATE TABLE Bookings (
    booking_id int,
    user_id int NOT NULL,
    match_id int NOT NULL,
    seat_number varchar(20),
    payment_status varchar(100),
    total_cost int NOT NULL,
  
    CONSTRAINT pk_bookings PRIMARY KEY (booking_id),
    CONSTRAINT fk_bookings_user FOREIGN KEY (user_id) REFERENCES Users (user_id),
    CONSTRAINT fk_bookings_match FOREIGN KEY (match_id) REFERENCES Matches (match_id),
    CONSTRAINT check_positive_total CHECK (total_cost >= 0),
    CONSTRAINT check_payment_status CHECK (
        payment_status IS NULL
        OR payment_status IN ('Pending', 'Confirmed', 'Cancelled', 'Refunded')
    )
);

-- =========================================================================
-- DATA SEEDING: INSERT SAMPLE DATA INTO USERS
-- =========================================================================
INSERT INTO
    Users (user_id, full_name, email, role, phone_number)
VALUES
    (
        1,
        'Tanvir Rahman',
        'tanvir@mail.com',
        'Football Fan',
        '+8801711111111'
    ),
    (
        2,
        'Asif Haque',
        'asif@mail.com',
        'Football Fan',
        '+8801722222222'
    ),
    (
        3,
        'Sajjad Rahman',
        'sajjad@mail.com',
        'Ticket Manager',
        '+8801733333333'
    ),
    (
        4,
        'Jannat Ara',
        'jannat@mail.com',
        'Football Fan',
        NULL
    );

-- =========================================================================
-- DATA SEEDING: INSERT SAMPLE DATA INTO MATCHES
-- =========================================================================
INSERT INTO
    Matches (
        match_id,
        fixture,
        tournament_category,
        base_ticket_price,
        match_status
    )
VALUES
    (
        101,
        'Real Madrid vs Barcelona',
        'Champions League',
        150.00,
        'Available'
    ),
    (
        102,
        'Man City vs Liverpool',
        'Premier League',
        120.00,
        'Selling Fast'
    ),
    (
        103,
        'Bayern Munich vs PSG',
        'Champions League',
        130.00,
        'Available'
    ),
    (
        104,
        'AC Milan vs Inter Milan',
        'Serie A',
        90.00,
        'Sold Out'
    ),
    (
        105,
        'Juventus vs Roma',
        'Serie A',
        80.00,
        'Available'
    );

-- =========================================================================
-- DATA SEEDING: INSERT SAMPLE DATA INTO BOOKINGS
-- =========================================================================
INSERT INTO
    Bookings (
        booking_id,
        user_id,
        match_id,
        seat_number,
        payment_status,
        total_cost
    )
VALUES
    (501, 1, 101, 'A-12', 'Confirmed', 150.00),
    (502, 1, 102, 'B-04', 'Confirmed', 120.00),
    (503, 2, 101, 'A-13', 'Confirmed', 150.00),
    (504, 2, 101, NULL, NULL, 150.00),
    (505, 3, 102, 'C-20', 'Pending', 120.00);

-- =========================================================================
-- Answer to Query 1:
-- =========================================================================
SELECT
    match_id,
    fixture,
    base_ticket_price
FROM
    Matches
WHERE
    tournament_category = 'Champions League'
    AND match_status = 'Available';

-- =========================================================================
-- Answer to Query 2:
-- =========================================================================
SELECT
    user_id,
    full_name,
    email
FROM
    users
WHERE
    full_name ILIKE 'Tanvir%'
    OR full_name ILIKE '%Haque%';

-- =========================================================================
-- Answer to Query 3:
-- =========================================================================
SELECT
    booking_id,
    user_id,
    match_id,
    coalesce(payment_status, 'Action Required') AS systematic_status
FROM
    Bookings
WHERE
    payment_status IS NULL;

-- =========================================================================
-- Answer to Query 4:
-- =========================================================================
SELECT
    b.booking_id,
    u.full_name,
    m.fixture,
    b.total_cost
FROM
    bookings AS b
    INNER JOIN matches AS m ON b.match_id = m.match_id
    INNER JOIN users AS u ON b.user_id = u.user_id;

-- =========================================================================
-- Answer to Query 5:
-- =========================================================================
SELECT
    u.user_id,
    u.full_name,
    b.booking_id
FROM
    users AS u
    LEFT JOIN bookings AS b ON u.user_id = b.user_id;

-- =========================================================================
-- Answer to Query 6:
-- =========================================================================
SELECT
    booking_id,
    match_id,
    total_cost
FROM
    bookings
WHERE
    total_cost > (
        SELECT
            avg(total_cost)
        FROM
            bookings
    );

-- =========================================================================
-- Answer to Query 7:
-- =========================================================================
SELECT
    match_id,
    fixture,
    base_ticket_price
FROM
    matches
ORDER BY
    base_ticket_price DESC
LIMIT
    2
OFFSET
    1;