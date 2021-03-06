export class Ad {
    // dummy data
    static dummyAds: Ad[] = [
        new Ad('1', 'Game of thrones', 'Maria', '1', 'maria@gmail.com',
        '7878889876', 'tel,email', 2.4, 'No description', 'Barceloneta, PR', 'PS4', 'games', 'alfa', ''),
        new Ad('2', 'Kill them all', 'Pedro', '1', 'pedro@gmail.com',
        '7878556553', 'email', 10, 'No description', 'Utuado, PR', 'PS3', 'games', 'beta', ''),
        new Ad('3', 'Original - Red', 'Cristina', '1', 'crist@gmail.com',
        '7871022253', 'tel', 15.25, 'No description', 'Vega Baja, PR', 'PS4', 'ctrls', 'gamma', ''),
        new Ad('4', 'Original', 'Antonio', '1', 'don@gmail.com',
        '7876554386', 'email', 9.999, 'No description', 'Canovanas, PR', 'PS3', 'ctrls', 'pi', ''),
        new Ad('5', 'HDMI', 'Juan Carlos', '1', 'don@gmail.com',
        '7876543332', 'email', 41, 'No description', 'Yauco, PR', 'XOne', 'cblsnetw', 'teta', ''),
        new Ad('6', 'Power AC', 'Humberto', '1', 'don@gmail.com',
        '7876548865', 'tel,email', 40, 'No description', 'Guayanilla, PR', 'PS2', 'cblsnetw', 'anet', ''),
        new Ad('7', 'Control Sensor Bateries', 'Jose', '1', 'don@gmail.com',
        '7872325134', 'tel,email', 28, 'No description', 'Añasco, PR', 'PS3', 'btrschr', 'anton', ''),
        new Ad('8', 'Originals', 'Cristina', '1', 'don@gmail.com',
        '7876453267', 'tel', 22, 'No description', 'Utuado, PR', 'XOne', 'btrschr', 'charlie', ''),
        new Ad('9', 'Collection Toy', 'Alfredo', '1', 'don@gmail.com',
        '7874655267', 'tel', 20, 'No description', 'Fajardo, PR', 'PS3', 'other', 'matos', ''),
        new Ad('10', 'Cover Sticker', 'Maria', '1', 'don@gmail.com',
        '7876548237', 'tel', 5, 'No description', 'Luquillo, PR', 'X360', 'other', 'sur', ''),
        new Ad('11', 'Metal Gear 5', 'Erika', '1', 'don@gmail.com',
        '7876345267', 'tel', 10, 'No description', 'San Juan, PR', 'X360', 'games', 'gamma17', ''),
        new Ad('12', 'CoD4', 'Hiram', '1', 'don@gmail.com',
        '7873458467', 'tel,email', 10, 'No description', 'Aguadilla, PR', 'X360', 'games', 'beta16', ''),
        new Ad('13', 'Original', 'Alexander', '1', 'don@gmail.com',
        '7873567245', 'Original - Black', 44, 'No description', 'Lares, PR', 'WiiU', 'ctrls', 'alpha15', ''),
        new Ad('14', 'Original', 'Julia', '1', 'don@gmail.com',
        '7876337553', 'Nix Gamming', 12.95, 'No description', 'Ponce, PR', 'PS3', 'ctrls', 'delta16', ''),
        new Ad('15', 'Game of thrones', 'Maria', '1', 'maria@gmail.com',
        '7878889876', 'email', 2.4, 'No description', 'Barceloneta, PR', 'WiiU', 'games', 'charlie14', ''),
        new Ad('16', 'Kill them all', 'Pedro', '1', 'pedro@gmail.com',
        '7876342231', 'email', 10, 'No description', 'Utuado, PR', 'PS4', 'games', 'beta13', ''),
        new Ad('17', 'Original', 'Cristina', '1', 'crist@gmail.com',
        '7871056884', 'tel', 15.25, 'No description', 'Vega Baja, PR', 'PS4', 'ctrls', 'gamma12', ''),
        new Ad('18', 'Original', 'Antonio', '1', 'don@gmail.com',
        '7877245654', 'tel,email', 10, 'No description', 'Jayuya, PR', 'Wii', 'ctrls', 'delta11', ''),
        new Ad('19', 'Lan', 'Joel', '1', 'don@gmail.com',
        '7878756823', 'tel,email', 20, 'No description', 'Culebra, PR', 'PS3', 'cblsnetw', 'delta10', ''),
        new Ad('20', 'HDMI', 'Julissa', '1', 'don@gmail.com',
        '7872388989', 'tel,email', 20, 'No description', 'Viques, PR', 'N2DS', 'cblsnetw', 'delta9', ''),
        new Ad('21', 'Replacement', 'Patricia', '1', 'don@gmail.com',
        '7876673245', 'tel,email', 20, 'No description', 'Trujillo Alto, PR', 'N3DS', 'btrschr', 'delta8', ''),
        new Ad('22', 'Controller Rechargeable', 'Ka', '1', 'don@gmail.com',
        '7871284346', 'email', 14.25, 'No description', 'Cataño, PR', 'Wii', 'btrschr', 'delta7', ''),
        new Ad('23', 'Collection Miniatures Mario', 'Katy', '1', 'don@gmail.com',
        '7874327654', 'tel,email', 10.99, 'No description', 'Manati, PR', 'Wii', 'other', 'delta6', ''),
        new Ad('24', 'Cover Sticker', 'Sindy', '1', 'don@gmail.com',
        '7870985656', 'tel,email', 32.50, 'No description', 'Santa Isabel, PR', 'PS3', 'other', 'delta5', ''),
        new Ad('25', 'Revenge', 'Gabriela', '1', 'don@gmail.com',
        '7871751212', 'email', 60, 'No description', 'Isabela, PR', 'Wii', 'games', 'delta4', ''),
        new Ad('26', 'Revenge', 'Juan', '1', 'don@gmail.com',
        '7876327566', 'tel,email', 25, 'No description', 'Cabo Rijo, PR', 'Wii', 'games', 'delta3', ''),
        new Ad('27', 'Rapid Fire Control', 'Carlos', '1', 'don@gmail.com',
        '7879945267', 'email', 12, 'No description', 'Rincon, PR', 'PS3', 'ctrls', 'delta2', ''),
        new Ad('28', 'FF Character Poster', 'Antonio', '1', 'don@gmail.com',
        '7876335467', 'tel', 15, 'No description', 'Ponce, PR', 'Other', 'other', 'delta1', '')
    ];

    static prices = {
        'games': ['3.00', '5.00', '10.00', '15.00', '20.00', '25.00', '30.00', '35.00', '40.00', '45.00', '50.00'],
        'ctrls': ['5.00', '10.00', '15.00', '20.00', '25.00', '30.00', '35.00', '50.00', '75.00', '100.00', '125.00'],
        'cblsnetw': ['1.00', '2.00', '3.00', '5.00', '8.00', '10.00', '12.00', '15.00', '20.00', '25.00', '30.00'],
        'bndlconsoles': ['25.00', '50.00', '75.00', '100.00', '125.00', '150.00', '175.00', '200.00', '225.00',
        '250.00', '275.00', '300.00', '350.00', '400.00', '450.00', '500.00'],
        'other': ['5.00', '10.00', '15.00', '20.00', '25.00', '50.00', '75.00', '100.00', '125.00', '150.00', '200.00']
    };

    id: string;
    name: string;
    owner: string;
    ownerid: string;
    email: string;
    telephone: string;
    contactMethod: string;
    price: number;
    description: string;
    city: string;
    console: string;
    section: string;
    itemIdentification: string;
    imageKey: string;
    expDateMilliseconds: number;
    deleted = false;

    constructor(id = '',
    name = '',
    owner = '',
    ownerid = '',
    email = '',
    telephone = '',
    contactMethod = '',
    price = 0,
    description = '',
    city = '',
    console = '',
    section = '',
    itemIdentification = '',
    imageKey = '') {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.ownerid = ownerid;
        this.email = email;
        this.telephone = telephone;
        this.contactMethod = contactMethod;
        this.price = price;
        this.city = city;
        this.console = console;
        this.section = section;
        this.itemIdentification = itemIdentification;
        this.imageKey = imageKey;
    }
}
