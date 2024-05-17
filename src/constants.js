import { nar, apple1, apple2, apple3 } from "./assets/images";

const constants = [
  {
    title: "Kardiyovasküler İlaçlar",

    subtitle1: "ACE İNHİBİTÖRLERİ",
    description1:`Angiotensin converting enzyme (ACE) inhibitörleri, yüksek tansiyon (hipertansiyon) ve kalp yetmezliği gibi kardiyovasküler hastalıkların tedavisinde kullanılan bir ilaç sınıfıdır.Bu ilaçlar, ACE enzimini engelleyerek, kan damarlarının genişlemesine ve kan basıncının düşmesine yardımcı olurlar. Ayrıca, kalp yetmezliği durumunda kalbin iş yükünü azaltarak kalp fonksiyonlarını iyileştirebilirler. ACE inhibitörleri genellikle hipertansiyon, koroner arter hastalığı, kalp yetmezliği ve diyabetik nefropati gibi durumların tedavisinde kullanılır.
        `,
    description1v1: `ACE inhibitörleri, potasyum seviyelerini artırabilir. Bu nedenle, potasyum içeriği yüksek gıdaların aşırı tüketimi (muz, portakal, ıspanak gibi) potansiyel olarak potasyum birikimine ve istenmeyen yan etkilere yol açabilir.`,
    description1v2: `ACE inhibitörleri tansiyonu düşürdüğü için tuz değiştiricileri veya aşırı tuzlu gıdaların (hazır çorbalar, konserve gıdalar, tuzlu atıştırmalıklar) kullanımı, kan basıncındaki düşüşü artırabilir.`,

    description1v3: `ACE inhibitörleriyle birlikte alkol alımı, kan basıncında aşırı düşüşlere veya baş dönmesi gibi yan etkilere neden olabilir.`,

    description1v4: `ACE inhibitörleri, kalsiyum metabolizmasını etkileyebilir. Kalsiyum takviyeleri veya kalsiyum içeren gıdaların (süt, peynir, yoğurt gibi) aşırı tüketimi, ilaçların etkinliğini etkileyebilir.`,

    subtitle2: `ANTİHİPERTANSİFLER`,

    description2: `Antihipertansifler, yüksek tansiyonu (hipertansiyon) kontrol altına almak için kullanılan ilaçlardır. Bu ilaçlar, kan basıncını düşürmek için farklı mekanizmaları hedef alır. Örneğin, ACE inhibitörleri, beta blokörler, kalsiyum kanal blokörleri ve diüretikler gibi farklı sınıflardan antihipertansif ilaçlar, kan damarlarının genişlemesini sağlayarak veya kalp atış hızını ve gücünü azaltarak kan basıncını düşürebilirler. Antihipertansifler, hipertansiyonun komplikasyonlarını önlemek ve kalp-damar sağlığını korumak için önemlidir ve düzenli olarak kullanılmalıdırlar.`,

    description2v1: `Bazı antihpertansif ilaçlar potasyum seviyelerini etkileyebilir. Potasyum takviyeleri veya potasyum içeriği yüksek gıdaların (muz, patates, ıspanak gibi) aşırı tüketimi, kan potasyum seviyelerinde anormalliklere yol açabilir.`,

    description2v2: `Alkol, kan basıncını etkileyebilir. Antihpertansif ilaçlarla birlikte alkol alımı, kan basıncında aşırı düşüşlere veya baş dönmesi gibi yan etkilere neden olabilir.`,

    description2v3: `Antihpertansif ilaçlar, kan basıncını düşürmek için kullanıldığından, tuz değiştiricileri veya yüksek tuz içeriğine sahip gıdaların (hazır çorbalar, konserve gıdalar, tuzlu atıştırmalıklar) kullanımı, kan basıncındaki düşüşü artırabilir.`,

    description2v4: `Kalsiyum kanal blokörleri gibi antihpertansif ilaçlar, kalsiyum metabolizmasını etkileyebilir. Bu nedenle, kalsiyum takviyeleri ile birlikte kullanıldığında, ilaçların etkinliği etkilenebilir.Bazı antihpertansif ilaçların etkinliği, greyfurt ve greyfurt suyu ile etkileşebilir. Bu
    nedenle, bu ilaçları kullanırken greyfurt tüketiminden kaçınılmalıdır.`,

    subtitle3: `BETA BLOKERLER`,
    description3: `Beta blokörler, beta adrenerjik reseptörleri bloke ederek etki eden ilaçlardır. Bu
    ilaçlar, kalp hızını azaltır, kalp atışlarını düzenler ve kan basıncını düşürerek kalp
    yetmezliği, hipertansiyon, anjina ve bazen migren gibi durumların tedavisinde
    kullanılır. Ayrıca, beta blokörler strese bağlı kalp atışlarını kontrol edebilir ve kalp
    krizi riskini azaltabilirler. Beta blokörler genellikle atenolol, metoprolol, propranolol
    gibi farklı aktif bileşenlerle temsil edilir ve doktor gözetiminde kullanılmalıdır.`,
    description3v1: `Beta blokörleri alkolle birlikte kullanmak, kan basıncında aşırı düşüşlere veya baş
      dönmesi gibi yan etkilere neden olabilir. Alkol ve beta blokörler birlikte
      kullanıldığında, kişinin tepkisinde yavaşlama ve koordinasyon bozuklukları gibi
      etkiler artabilir.`,
    description3v2: `Kafein, kalp atış hızını artırabilir ve beta blokörlerin etkilerini zayıflatabilir. Çok fazla
      kafein alımı, beta blokörlerin etkinliğini azaltabilir veya yan etkilerini artırabilir.
      `,
    description3v3: `Bazı beta blokörler potasyum seviyelerini etkileyebilir. Bu nedenle, potasyum
      takviyeleri veya potasyum içeriği yüksek gıdaların (muz, portakal, ıspanak gibi) aşırı
      tüketimi, kan potasyum seviyelerinde anormalliklere yol açabilir.`,
    description3v4: `Beta blokörler, kan basıncını düşürmek için kullanıldığından, tuz değiştiricileri veya
      yüksek tuz içeriğine sahip gıdaların (hazır çorbalar, konserve gıdalar, tuzlu
      atıştırmalıklar) kullanımı, kan basıncındaki düşüşü artırabilir.`,

    subtitle4: `ANTİARİTMİK İLAÇLAR`,
    description4: `Antiaritmik ilaçlar, kalp ritim bozukluklarını düzeltmek veya kontrol altına almak için
      kullanılan ilaçlardır. Kalbin düzenli ve koordineli bir şekilde atmasını sağlamak için
      elektriksel aktiviteyi düzenleyerek çalışırlar. Bu ilaçlar, atriyal fibrilasyon, atriyal
      flutter, ventriküler taşikardi gibi kalp ritim bozuklukları tedavisinde kullanılır.
      Sınıflandırıldıkları gruplara göre farklı mekanizmalara sahiptirler ve belirli kalp ritim
      bozukluklarına özgü olarak kullanılırlar.`,
    description4v1: `Bazı antiaritmik ilaçların etkinliği, greyfurt ve greyfurt suyu ile etkileşebilir. Bu
      nedenle, bu ilaçları kullanırken greyfurt tüketiminden kaçınılmalıdır.`,
    description4v2: `Kalsiyum ve magnezyum, antiaritmik ilaçların emilimini etkileyebilir. Bu nedenle,
      kalsiyum ve magnezyum içeren gıdaların (süt, peynir, badem, fındık gibi) aşırı
      tüketimi, ilaçların etkinliğini etkileyebilir.`,
    description4v3: `Kafein, kalp ritim bozukluklarına etki edebilir ve antiaritmik ilaçların etkilerini
      zayıflatabilir. Çok fazla kafein alımı, ilaçların etkinliğini azaltabilir veya yan etkilerini
      artırabilir.`,
    description4v4: `Alkol, kalp ritim bozukluklarına etki edebilir ve ilaçların etkilerini değiştirebilir. Alkol
      ve antiaritmik ilaçlar bir arada kullanıldığında, ilaçların etkileri değişebilir ve yan
      etkiler artabilir.`,

    subtitle5: `KALSİYUM KANAL BLOKÖRLERİ`,
    description5: `Kalsiyum kanal blokörleri, kalsiyum kanallarını bloke ederek kalp damarlarındaki
      kasılmaları ve kalp atışlarını düzenleyen ilaçlardır. Bu ilaçlar, kan damarlarının
      genişlemesini sağlayarak kan basıncını düşürür ve kalp kaslarının daha verimli
      çalışmasını teşvik eder. Bu sayede angina (göğüs ağrısı), hipertansiyon (yüksek
      tansiyon), supraventriküler taşikardi ve bazı durumlarda migrenin tedavisinde
      kullanılırlar. Kalsiyum kanal blokörleri, kalp ritmini düzenlemek için atriyum ve
      ventriküllerdeki kas hücrelerinin elektriksel aktivitesini etkiler ve kalbin oksijen
      gereksinimini azaltır.`,
    description5v1: `Bazı kalsiyum kanal blokörlerinin etkinliği, greyfurt ve greyfurt suyu ile etkileşebilir.
      Bu nedenle, bu ilaçları kullanırken greyfurt tüketiminden kaçınılmalıdır.`,
    description5v2: `Kalsiyum kanal blokörleri, vücuttaki ilaç emilimini etkileyebilecek ve ilaçların
      etkinliğini azaltabilecek yüksek yağ içeriğine sahip gıdaların tüketimiyle etkileşebilir.`,
    description5v3: `Kafein, kalp ritim bozukluklarına etki edebilir ve kalsiyum kanal blokörlerinin
      etkilerini zayıflatabilir. Çok fazla kafein alımı, ilaçların etkinliğini azaltabilir veya yan
      etkilerini artırabilir.`,
    description5v4: `Alkol, kan basıncını etkileyebilir ve kalsiyum kanal blokörlerinin etkilerini
      değiştirebilir. Alkol ve kalsiyum kanal blokörleri bir arada kullanıldığında, ilaçların
      etkileri değişebilir ve yan etkiler artabilir.`,

    subtitle6: `DİÜRETİK İLAÇLAR`,
    description6: `Diüretik ilaçlar, vücuttan sıvı ve tuz atılmasını artıran ve böylece idrar oluşumunu
      artıran ilaçlardır. Bu ilaçlar genellikle yüksek tansiyon (hipertansiyon), kalp
      yetmezliği, ödem ve böbrek hastalıklarının tedavisinde kullanılır. Diüretikler,
      böbreklerin çalışmasını uyararak fazla sıvı ve tuzu vücuttan atarak kan basıncını
      düşürürler. Farklı tipleri bulunmakla birlikte, en yaygın olarak kullanılan diüretikler
      tiazid diüretikler, loop diüretikler ve potasyum-sparing diüretiklerdir. Bu ilaçlar,
      vücutta sıvı dengesini kontrol etmek ve ödem gibi durumların yönetimine yardımcı
      olmak için etkili bir şekilde kullanılırlar.`,
    description6v1: `Bazı diüretikler, vücuttan potasyum atılımını artırabilir. Bu nedenle, potasyum
      takviyeleri veya potasyum içeriği yüksek gıdaların (muz, portakal, ıspanak gibi) aşırı
      tüketimi, kan potasyum seviyelerinde anormalliklere yol açabilir.`,
    description6v2: `Diüretikler, sıvı atılımını artırarak tansiyonu düşürdüğü için, tuz değiştiricileri veya
      yüksek tuz içeriğine sahip gıdaların (hazır çorbalar, konserve gıdalar, tuzlu
      atıştırmalıklar) kullanımı, kan basıncındaki düşüşü artırabilir.`,
    description6v3: `Kafein, böbrekler üzerinde etkili olabilir ve idrar oluşumunu artırabilir. Diüretiklerle
      birlikte kafein alımı, vücutta aşırı sıvı kaybına veya elektrolit dengesizliklerine yol
      açabilir.`,
    description6v4: `Alkol, vücuttaki sıvı dengesini etkileyebilir ve diüretiklerin etkilerini değiştirebilir.
      Alkol ve diüretikler bir arada kullanıldığında, ilaçların etkileri değişebilir ve yan
      etkiler artabilir.`,
    color: "bg-lime-950",
  },
  {
    title: "Antitümör İlaçlar",

    description: "",

    description1: `Antitümör ilaçlar, kanser hücrelerinin büyümesini ve yayılmasını durdurmaya veya önlemeye yardımcı olan ilaçlardır. Bu ilaçlar genellikle kanser hücrelerinin çoğalmasını engelleyen veya hücrelerin ölümünü teşvik eden bir mekanizma üzerinde etki eder. Antitümör ilaçları, kanser tedavisinde kullanılan birçok farklı türde ilacı içerebilir, bunlar kemoterapi, hedefe yönelik tedaviler, immünoterapi ve hormon terapisi gibi çeşitli tedavi yöntemlerini içerebilir. Antitümör ilaçları ile besin etkileşimleri, bazı besinlerin veya diğer ilaçların bu ilaçların etkinliğini azaltabileceği veya artırabileceği şekillerde gerçekleşebilir.`,
    description1v1: `Bazı antitümör ilaçları olan tiyopurinlerin alımı sırasında meyve suyu veya turunçgiller gibi C vitamini açısından zengin besinlerin tüketimi, ilacın etkinliğini azaltabilir. Bunun nedeni, C vitamini'nin tiyopurinlerin metabolizmasını hızlandırabilmesidir. Benzer şekilde, bazı antitümör ilaçları olan proteaz inhibitörleri ile yüksek yağlı yiyeceklerin tüketimi, ilacın emilimini artırabilir ve yan etki riskini artırabilir. Özellikle bazı antitümör ilaçlarıyla ilgili olarak, alkol tüketiminin kaçınılması veya sınırlanması önerilebilir, çünkü alkol ilacın metabolizmasını etkileyebilir ve toksisite riskini artırabilir. Bu nedenle, antitümör ilaçları alan hastaların, ilaçlarını alırken beslenme alışkanlıklarına dikkat etmeleri ve doktorlarıyla bu konuda konuşmaları önemlidir.`,

    color: "bg-lime-950",
  },
  {
    title: "Nörolojik İlaçlar",
    subtitle1: "ANTİANKSİYETE İLAÇLARI",
    description1: `Antianksiyete ilaçları, anksiyete bozuklukları gibi ruhsal durumları tedavi etmek için
    kullanılan ilaçlardır. Bu ilaçlar, beyindeki kimyasal dengesizlikleri düzenleyerek veya
    sinir sistemi üzerinde sakinleştirici bir etki yaparak çalışır. Antianksiyete ilaçları
    genellikle benzodiazepinler ve selektif serotonin geri alım inhibitörleri (SSRI'lar) gibi
    ilaç sınıflarını içerir. Benzodiazepinler, hızlı bir şekilde anksiyete semptomlarını
    hafifletirken, SSRI'lar daha uzun vadeli tedavide daha yaygın olarak kullanılır ve
    anksiyete semptomlarını zamanla azaltmaya yardımcı olabilir. Antianksiyete ilaçları,
    aşırı endişe, kaygı, sinirlilik, uykusuzluk ve diğer anksiyete semptomlarının kontrol
    altına alınmasına yardımcı olabilir.`,
    description1v1: `Antianksiyete ilaçlarıyla bazı besinler veya içecekler arasında etkileşimler
      gözlemlenebilir. Özellikle, alkol tüketimi ve antianksiyete ilaçları arasında ciddi
      etkileşimler olabilir. Alkol, antianksiyete ilaçlarının etkisini artırabilir ve istenmeyen
      yan etkileri artırabilir, bu nedenle alkol tüketimi sırasında bu ilaçların kullanılması
      genellikle önerilmez. Ayrıca, bazı antianksiyete ilaçlarının alımı sırasında kafein
      tüketimi, anksiyete semptomlarını artırabilir ve uykusuzluk riskini artırabilir.`,
    subtitle2: "ANTİKONVÜLSAN İLAÇLAR",
    description2: `Antikonvülsan ilaçlar, epilepsi gibi nörolojik bozukluklarda kullanılan ilaçlardır.
   Epilepsi, beyin hücrelerinin anormal elektriksel aktivitesinden kaynaklanan
   tekrarlayan nöbetlere yol açan bir durumdur. Antikonvülsan ilaçlar, beyindeki
   elektriksel aktiviteyi düzenleyerek ve sinir iletimini kontrol ederek çalışır. Bu ilaçlar,
   nöbet sıklığını azaltmak, nöbetlerin şiddetini hafifletmek veya nöbetlerin tamamen
   önlenmesine yardımcı olmak amacıyla kullanılır. Farklı antikonvülsan ilaçlar farklı
   mekanizmalarla etki gösterir ve farklı tipte nöbetlere yönelik olarak kullanılabilirler.
   Örneğin, bazıları nöbetin yayılmasını engellerken, diğerleri nöbet sıklığını azaltır.`,
    description2v1: `Antikonvülsan ilaçlarla bazı besinler veya içecekler arasında etkileşimler olabilir.
   Özellikle, bazı antikonvülsan ilaçların alımı sırasında alkol tüketimi, ilacın etkinliğini
   azaltabilir ve yan etkileri artırabilir. Ayrıca, bazı antikonvülsan ilaçlarının alımı
   sırasında bazı besinlerin veya takviyelerin tüketimi, ilacın emilimini etkileyebilir veya
   etkisini azaltabilir.`,

    subtitle3: "ANTİPSİKOTİKLER",
    description3: `Antipsikotik ilaçlar, şizofreni, bipolar bozukluk, psikotik depresyon gibi psikiyatrik
   bozuklukların tedavisinde kullanılan ilaçlardır. Bu ilaçlar, beyindeki dopamin ve
   serotonin gibi nörotransmitterlerin dengesizliğini düzenleyerek ve sinir sistemi
   üzerinde etki ederek çalışır. Antipsikotik ilaçlar, halüsinasyonlar, sanrılar, düşünce
   bozuklukları ve diğer psikotik semptomların şiddetini azaltmaya veya kontrol altına
   almaya yardımcı olabilir. İki ana sınıfa ayrılırlar: tipik (klasik) antipsikotikler ve atipik
   antipsikotikler. Tipik antipsikotikler genellikle dopamin reseptörlerine etki ederken,
   atipik antipsikotikler hem dopamin hem de serotonin reseptörlerine etki
   edebilirler.`,
    description3v1: `Antipsikotik ilaçlarla bazı besinler veya içecekler arasında etkileşimler olabilir.
   Özellikle, antipsikotik ilaçlarla alkol tüketimi arasında ciddi etkileşimler olabilir.
   Alkol, antipsikotik ilaçların etkisini artırabilir ve istenmeyen yan etkileri artırabilir,
   bu nedenle alkol tüketimi sırasında bu ilaçların kullanılması genellikle önerilmez.
   Ayrıca, bazı antipsikotik ilaçların alımı sırasında bazı besinlerin veya takviyelerin
   tüketimi, ilacın emilimini etkileyebilir veya etkisini azaltabilir.`,

    subtitle4: "TRANKİLİZANLAR",
    description4: `Trankilizan ilaçlar, anksiyete, uykusuzluk, sinirlilik ve diğer duygusal durumlarla
   ilişkili semptomları hafifletmek veya kontrol altına almak için kullanılan ilaçlardır.
   Bu ilaçlar, beyindeki kimyasal dengesizlikleri düzenleyerek veya sinir sistemi
   üzerinde sakinleştirici bir etki yaparak çalışır. Trankilizanlar, genellikle
   benzodiazepinler veya non-benzodiazepinler olarak sınıflandırılır. Benzodiazepinler
   hızlı bir şekilde etki gösterir ve kısa vadeli anksiyete semptomlarını hafifletirken,
   non-benzodiazepinler daha uzun süreli tedavide kullanılır ve genellikle uykusuzluk
   için reçete edilirler.`,
    description4v1: `Trankilizan ilaçlarla bazı besinler veya içecekler arasında etkileşimler olabilir.
   Özellikle, alkol tüketimi ve trankilizan ilaçlar arasında ciddi etkileşimler olabilir.
   Alkol, trankilizan ilaçların etkisini artırabilir ve istenmeyen yan etkileri artırabilir, bu
   nedenle alkol tüketimi sırasında bu ilaçların kullanılması genellikle önerilmez.
   Ayrıca, bazı trankilizan ilaçların alımı sırasında bazı besinlerin veya takviyelerin
   tüketimi, ilacın emilimini etkileyebilir veya etkisini azaltabilir.`,
    subtitle5: "SEDATİF VE HİPNOTİKLER",
    description5: `Sedatif ve hipnotik ilaçlar, uyku bozuklukları veya anksiyete gibi durumların
   tedavisinde kullanılan ilaçlardır. Sedatifler genellikle sakinleştirici olarak bilinir ve
   huzursuzluğu azaltarak gevşemeye ve rahatlamanıza yardımcı olur. Hipnotikler ise
   uykusuzluğun giderilmesine ve uyku kalitesinin artırılmasına yönelik ilaçlardır. Bu
   ilaçlar genellikle merkezi sinir sistemi üzerinde etki ederek beyindeki kimyasal
   dengesizlikleri düzenlerler.`,
    description5v1: `Sedatif ve hipnotik ilaçlarla bazı besinler veya içecekler arasında etkileşimler
   olabilir. Özellikle, alkol tüketimi ve bu ilaçlar arasında ciddi etkileşimler olabilir.
   Alkol, ilaçların etkisini artırabilir ve istenmeyen yan etkileri artırabilir, bu nedenle
   alkol tüketimi sırasında bu ilaçların kullanılması genellikle önerilmez. Ayrıca, bazı
   sedatif ve hipnotik ilaçların alımı sırasında bazı besinlerin veya takviyelerin tüketimi,
   ilacın emilimini etkileyebilir veya etkisini azaltabilir.`,
    subtitle6: "MSS’Nİ ETKİLEYEN İLAÇLAR",
    description6: `Merkezi sinir sistemini etkileyen ilaçlar, beyin ve omurilikteki sinir hücrelerini
   etkileyerek, sinir iletimini değiştirir veya düzenler. Bu ilaçlar, beyin kimyasal
   dengesizliklerini düzenleyerek veya sinir hücrelerinin etkileşimlerini değiştirerek
   çalışır. Genellikle nörolojik ve psikiyatrik bozuklukların tedavisinde kullanılırlar. Bu
   ilaçlar arasında antidepresanlar, antipsikotikler, antianksiyete ilaçları, sedatifler,
   hipnotikler, antikonvülsanlar ve diğer psikotropik ilaçlar bulunur. Antidepresanlar,
   depresyon ve bazı anksiyete bozukluklarının tedavisinde kullanılırken,
   antipsikotikler şizofreni ve bipolar bozukluk gibi psikotik bozuklukların tedavisinde
   kullanılır. Antianksiyete ilaçları, anksiyete ve panik bozukluklarına karşı etkilidirken,
   sedatifler ve hipnotikler uyku düzenini düzenler ve uykusuzluğun giderilmesine
   yardımcı olur.`,
    description6v1: `Merkezi sinir sistemini etkileyen ilaçlarla bazı besinler veya içecekler arasında
   etkileşimler gözlemlenebilir. Özellikle, alkol tüketimi ve bu ilaçlar arasında ciddi
   etkileşimler olabilir. Alkol, ilaçların etkisini artırabilir ve istenmeyen yan etkileri
   artırabilir, bu nedenle alkol tüketimi sırasında bu ilaçların kullanılması genellikle
   önerilmez. Ayrıca, bazı ilaçların alımı sırasında bazı besinlerin veya takviyelerin
   tüketimi, ilacın emilimini etkileyebilir veya etkisini azaltabilir.`,
    color: "bg-lime-600",
  },
  {
    title: "Gastrointestinal İlaçlar",
    subtitle1: "MİDE İLAÇLARI",
    description1: `Mide ilaçları, sindirim sistemi üzerinde etkili olan çeşitli durumları tedavi etmek için
      kullanılan ilaçlardır. Bu ilaçlar, mide asidini azaltarak mide yanması, ülser, reflü
      hastalığı ve diğer sindirim sistemi sorunlarının semptomlarını hafifletmeye
      yardımcı olur. Mide ilaçları genellikle asit baskılayıcılar, antiasitler, proton pompa
      inhibitörleri (PPI'lar) ve H2 reseptör blokerleri gibi farklı tiplerde gelir. Bu ilaçlar,
      mide asidini düzenleyerek mide duvarını korur ve sindirim sistemi rahatsızlıklarının
      semptomlarını azaltır.`,
    description1v1: `Asit baskılayıcılar, özellikle PPI'lar, mide asidinin üretimini azaltır. Bu nedenle, kafein
      ve aspirin gibi mideyi uyarıcı maddelerin etkisi, bu ilaçlarla birlikte alındığında
      artabilir. Bu, mide iritasyonuna ve ülser riskinin artmasına neden olabilir. Bu
      nedenle, bu tür maddeleri tüketirken ve mide ilaçlarını alırken dikkatli olunmalı ve
      doktorunuzun önerilerine uyulmalıdır.`,
    description1v2: `Bazı mide ilaçları, özellikle antiasitler, besinlerin emilimini etkileyebilir. Özellikle
      demir, kalsiyum ve B12 vitamini gibi besin maddelerinin emilimi mide asidinin
      varlığına bağlıdır. Bu ilaçlar mide asidini azalttığından, bu besin maddelerinin
      emilimi azalabilir.`,
    description1v3: `Bazı mide ilaçları, özellikle PPI'lar, düzenli olarak belirli bir zaman diliminde
      alınmalıdır, genellikle aç karnına sabahları. Bu, ilacın etkinliğini artırabilir ve
      sindirim sistemi rahatsızlıklarının semptomlarını daha iyi kontrol altında tutabilir. Bu
      nedenle, mide ilaçlarını düzenli olarak almak ve beslenme düzeninizi buna göre
      ayarlamak önemlidir.`,

    color: "bg-violet-800",
  },
  {
    title: "Antibiyotikler",
    subtitle1: "ANTİBİYOTİKLER",
    description1: `Antibiyotik ilaçlar, bakteriyel enfeksiyonları tedavi etmek veya önlemek için
    kullanılan ilaçlardır. Antibiyotikler, bakterilerin büyümesini veya çoğalmasını
    engelleyerek veya onları öldürerek etki gösterir. Farklı türlerde antibiyotikler vardır
    ve her biri belirli bakteri türlerine veya enfeksiyon türlerine karşı etkilidir. Örneğin,
    penisilinler, sefalosporinler, makrolidler ve tetrasiklinler gibi yaygın antibiyotik
    sınıfları bulunur. Antibiyotikler, boğaz enfeksiyonları, sinüzit, idrar yolu
    enfeksiyonları, cilt enfeksiyonları ve akciğer enfeksiyonları gibi çeşitli
    enfeksiyonların tedavisinde kullanılır. Ancak, antibiyotikler sadece bakteriyel
    enfeksiyonları tedavi eder, viral enfeksiyonlara veya diğer hastalıklara etki etmez.`,
    description1v1: `Bazı antibiyotikler besinlerle etkileşime girebilir ve emilimini etkileyebilir. Örneğin,
    tetrasiklinlerin süt veya süt ürünleriyle alınması, ilacın emilimini azaltabilir ve
    etkinliğini azaltabilir. Ayrıca, alkol tüketimi bazı antibiyotiklerin etkisini azaltabilir
    veya yan etkileri artırabilir. Örneğin, metronidazol gibi belirli antibiyotiklerle alkol
    alımı, ciddi yan etkilerle ilişkilendirilmiştir.`,
    subtitle2: "ANTİFUNGALLAR",
    description2: `Antifungaller, mantar enfeksiyonlarını tedavi etmek veya önlemek için kullanılan
    ilaçlardır. Bu ilaçlar, mantarların hücre duvarını bozarak veya mantar hücrelerinin
    çoğalmasını engelleyerek etki gösterir. Antifungaller genellikle cilt, tırnaklar,
    mukoza zarları veya iç organlarda (örneğin, akciğerler veya sinüsler) mantar
    enfeksiyonlarının tedavisinde kullanılır. Antifungal ilaçlar topikal olarak (cilt üzerine
    uygulanan kremler veya merhemler), oral olarak (ağız yoluyla alınan tabletler veya
    sıvılar) veya enjeksiyon yoluyla verilebilir. Örneğin, azoller, polienler,
    ekinokandinler gibi farklı antifungal ilaç sınıfları bulunur.`,
    description2v1: `Bazı antifungal ilaçlar ile besinler veya içecekler arasında etkileşimler olabilir.
      Örneğin, azol antifungallerin bazıları, karaciğerdeki sitokrom P450 enzimlerini
      etkileyerek diğer ilaçların metabolizmasını etkileyebilir ve böylece ilaçların kan
      düzeylerini artırabilir veya azaltabilir. Ayrıca, bazı antifungal ilaçlarla alkol tüketimi,
      ilacın etkisini azaltabilir veya yan etkileri artırabilir.`,
    subtitle3: "ANTİTÜBERKULAR İLAÇLAR",
    description3: `Antitüberküler ilaçlar, tüberküloz (TB) adı verilen bakteriyel bir enfeksiyonun
      tedavisinde kullanılan ilaçlardır. Tüberküloz, Mycobacterium tuberculosis adı
      verilen bakterinin neden olduğu bulaşıcı bir hastalıktır ve genellikle akciğerleri
      etkiler, ancak diğer vücut bölgelerini de etkileyebilir. Antitüberküler ilaçlar,
      tüberküloz bakterilerini öldürerek veya büyümesini engelleyerek etki gösterir.
      Tedavide genellikle birden fazla ilaç kombinasyonu kullanılır ve bu kombinasyonlar,
      tüberküloz bakterilerinin direncini önlemek ve tedaviyi etkin kılmak için belirlenir.`,
    description3v1: `Antitüberküler ilaçlarla bazı besinler veya içecekler arasında etkileşimler olabilir.
      Özellikle, bazı antitüberküler ilaçlar olan rifampisin ve izoniazid ile bazı besinler
      arasında etkileşimler gözlemlenmiştir. Örneğin, rifampisinin alımı sırasında alkol
      tüketimi, ilacın etkinliğini azaltabilir ve tedavinin başarısız olma riskini artırabilir.
      Ayrıca, rifampisin, karaciğerdeki sitokrom P450 enzimlerini etkileyerek diğer
      ilaçların metabolizmasını da etkileyebilir. İzoniazid ise B6 vitamini (piridoksin)
      metabolizmasını etkileyebilir, bu da B6 vitamini eksikliğine yol açabilir.`,
    subtitle4: "MAKROLİDLER",
    description4: `Makrolidler, bakteriyel enfeksiyonları tedavi etmek için kullanılan bir tür antibiyotik
    ilaç sınıfını ifade eder. Bu ilaçlar, bakterilerin büyümesini ve çoğalmasını
    engelleyerek veya onları öldürerek etki gösterir. Makrolidler, hücre duvarını hedef
    alarak bakteriyel protein üretimini durdurur ve bu da bakterilerin çoğalmasını
    engeller. Makrolidler, genellikle solunum yolu enfeksiyonları, cilt enfeksiyonları,
    sinüzit, bronşit ve diğer bakteriyel enfeksiyonların tedavisinde kullanılır.
    Eritromisin, azitromisin ve klaritromisin gibi yaygın makrolid antibiyotikler
    bulunmaktadır.`,
    description4v1: `Bazı makrolid antibiyotiklerle besinler veya içecekler arasında etkileşimler
      gözlemlenebilir. Özellikle, makrolidlerin alımı sırasında alkol tüketimi, ilacın
      emilimini etkileyebilir ve yan etkileri artırabilir. Ayrıca, bazı makrolidlerin alımı
      sırasında süt ve süt ürünleri gibi kalsiyum açısından zengin besinlerin tüketimi,
      ilacın emilimini azaltabilir.`,
    subtitle5: "KİNOLONLAR",
    description5: `Kinolonlar, bakteriyel enfeksiyonları tedavi etmek için kullanılan bir tür antibiyotik
      ilaç sınıfını ifade eder. Bu ilaçlar, bakterilerin büyümesini ve çoğalmasını
      engelleyerek veya onları öldürerek etki gösterir. Kinolonlar, bakteriyel DNA
      replikasyonunu inhibe ederek çalışırlar ve bu da bakterilerin çoğalmasını durdurur.
      Bu ilaç sınıfı, üriner sistem enfeksiyonları, solunum yolu enfeksiyonları, cilt
      enfeksiyonları ve diğer çeşitli bakteriyel enfeksiyonların tedavisinde kullanılır.
      Kinolonlar arasında siprofloksasin, levofloksasin ve moksifloksasin gibi yaygın
      olarak kullanılan antibiyotikler bulunmaktadır.`,
    description5v1: `Kinolon antibiyotiklerle bazı besinler veya içecekler arasında etkileşimler
      gözlemlenebilir. Özellikle, kinolonların alımı sırasında alkol tüketimi, ilacın
      etkinliğini azaltabilir ve yan etkileri artırabilir. Ayrıca, bazı kinolon antibiyotiklerin
      alımı sırasında süt ve süt ürünleri gibi kalsiyum açısından zengin besinlerin
      tüketimi, ilacın emilimini azaltabilir.`,

    subtitle6: "SEFALOSPORİNLER",
    description6: `Sefalosporinler, bakteriyel enfeksiyonları tedavi etmek için kullanılan bir tür
      antibiyotik ilaç sınıfını ifade eder. Bu ilaçlar, bakterilerin hücre duvarlarını hedef
      alarak çalışır ve bakterilerin çoğalmasını engelleyerek veya onları öldürerek etki
      gösterir. Sefalosporinler genellikle cerrahi enfeksiyonlar, solunum yolu
      enfeksiyonları, üriner sistem enfeksiyonları, cilt enfeksiyonları ve menenjit gibi
      çeşitli enfeksiyonların tedavisinde kullanılır. Sefalosporinler, farklı nesillerde
      sınıflandırılır ve her bir nesil belirli bakteri türlerine karşı etkilidir. Örneğin, birinci
      nesil sefalosporinler daha geniş bir bakteriyel kapsama sahipken, sonraki nesiller
      daha belirli bakteri tiplerine odaklanmıştır.`,
    description6v1: `Sefalosporinlerle bazı besinler veya içecekler arasında etkileşimler gözlemlenebilir.
      Ancak, genellikle sefalosporinlerin diğer antibiyotiklerle karşılaştırıldığında besin
      etkileşimleri daha azdır. Bununla birlikte, alkol tüketimi, bazı sefalosporinlerin
      etkinliğini azaltabilir ve yan etkileri artırabilir. Ayrıca, bazı sefalosporinlerin alımı
      sırasında süt ve süt ürünleri gibi kalsiyum açısından zengin besinlerin tüketimi,
      ilacın emilimini azaltabilir.`,

    subtitle7: "TETRASİKLİNLER",
    description7: `Tetrasiklinler, bakteriyel enfeksiyonları tedavi etmek için kullanılan bir tür
      antibiyotik ilaç sınıfını ifade eder. Bu ilaçlar, bakterilerin protein sentezini
      durdurarak çalışır ve bakterilerin büyümesini ve çoğalmasını engeller. Tetrasiklinler
      genellikle akne, üriner sistem enfeksiyonları, sinüzit, cilt enfeksiyonları ve diğer
      bakteriyel enfeksiyonların tedavisinde kullanılır. Tetrasiklinler, genellikle diğer
      antibiyotiklerin kullanılmadığı durumlarda veya diğer antibiyotiklere direnç
      geliştiğinde tercih edilir. Tetrasiklinler arasında tetrasislin, doksisiklin ve minosiklin
      gibi yaygın olarak kullanılan antibiyotikler bulunmaktadır.`,
    description7v1: `Tetrasiklin antibiyotiklerle bazı besinler veya içecekler arasında etkileşimler
      gözlemlenebilir. Özellikle, tetrasiklinlerin alımı sırasında alkol tüketimi, ilacın
      etkinliğini azaltabilir ve yan etkileri artırabilir. Ayrıca, bazı tetrasiklinlerin alımı
      sırasında süt ve süt ürünleri gibi kalsiyum açısından zengin besinlerin tüketimi,
      ilacın emilimini azaltabilir.`,

    subtitle8: "NİTROMİDAZOL",
    description8: `Nitromidazoller, bakteriyel ve paraziter enfeksiyonları tedavi etmek için kullanılan
      bir tür antibiyotik ilaç sınıfını ifade eder. Bu ilaçlar, mikroorganizmaların DNA'sını
      etkileyerek çalışır ve bu da onların çoğalmasını engeller veya ölümüne neden olur.
      Nitromidazoller genellikle vajinal enfeksiyonlar, üriner sistem enfeksiyonları,
      sindirim sistemi enfeksiyonları ve paraziter enfeksiyonların tedavisinde kullanılır.
      Nitromidazoller arasında metronidazol en yaygın kullanılanıdır ve genellikle
      bakteriyel vajinoz, Trichomonas vaginalis enfeksiyonu, amipli dizanteri gibi
      enfeksiyonların tedavisinde etkilidir.`,
    description8v1: `Metronidazol gibi nitromidazol antibiyotiklerle bazı besinler veya içecekler arasında
      etkileşimler olabilir. Özellikle, alkol tüketimi metronidazol ile ciddi yan etkiler ve
      reaksiyonlar riskini artırabilir. Alkol ve metronidazol etkileşimi, kusma, baş ağrısı,
      mide bulantısı, yüksek kalp atış hızı gibi semptomlara neden olabilir ve çok ciddi
      durumlarda nöbetlere yol açabilir. Bu nedenle, nitromidazol antibiyotikler alırken,
      alkol tüketmekten kaçınılmalıdır. Ayrıca, bazı nitromidazollerin alımı sırasında süt
      ve süt ürünleri gibi kalsiyum açısından zengin besinlerin tüketimi, ilacın emilimini
      azaltabilir.`,

    subtitle9: "OKSAZOLİDİNON",
    description9: `Oksazolidinonlar, bakteriyel enfeksiyonları tedavi etmek için kullanılan bir tür
      antibiyotik ilaç sınıfını ifade eder. Bu ilaçlar, bakterilerin protein sentezini
      durdurarak çalışır ve bu da bakterilerin büyümesini ve çoğalmasını engeller.
      Oksazolidinonlar genellikle cilt enfeksiyonları, solunum yolu enfeksiyonları ve diğer
      çeşitli bakteriyel enfeksiyonların tedavisinde kullanılır. Linezolid, oksazolidinon
      sınıfına ait en yaygın kullanılan antibiyotiktir ve özellikle ciddi gram pozitif
      enfeksiyonların tedavisinde etkilidir.`,
    description9v1: `Oksazolidinonlarla bazı besinler veya içecekler arasında etkileşimler
      gözlemlenebilir. Özellikle, linezolid gibi oksazolidinonların alımı sırasında alkol
      tüketimi, ilacın etkinliğini azaltabilir ve yan etkileri artırabilir. Ayrıca, bazı
      oksazolidinonların alımı sırasında süt ve süt ürünleri gibi tirozin içeren besinlerin
      tüketimi, ilacın emilimini azaltabilir.`,

    color: "bg-rose-500",
  },
  {
    title: "Antikoagülanlar ve Trombolitikler",

    subtitle1: "ANTİKOAGÜLANLAR VE TROMBOLİTİKLER",
    description1: `Antikoagülanlar ve trombolitikler, kan pıhtılarını önleme veya var olan pıhtıları
      çözme amacıyla kullanılan iki farklı türde ilaçtır. Antikoagülanlar, kan pıhtılarını
      oluşturan faktörlerin aktivitesini inhibe ederek pıhtı oluşumunu engeller.
      Trombolitikler ise, kan damarlarında oluşmuş olan pıhtıları çözerek kan akışını
      yeniden sağlarlar. Antikoagülanlar genellikle uzun süreli kullanıma yöneliktir ve
      genellikle kalp krizi, inme, derin ven trombozu gibi durumların önlenmesi veya
      tedavisinde kullanılır. Trombolitikler ise, akut durumlarda, özellikle kalp krizi
      veya inme gibi ani pıhtı oluşumları durumunda acil olarak kullanılır.`,
    description1v1: `Antikoagülanlar özellikle K vitamini içeren yeşil yapraklı sebzeler gibi besinlerle
      etkileşebilir. Bu tür besinler, kan pıhtılarının oluşumunu etkileyen K vitamini
      seviyelerini değiştirerek antikoagülan ilaçların etkinliğini azaltabilir veya
      artırabilir. Öte yandan, trombolitiklerin besin-ilacı etkileşimleri daha az
      bilinmektedir, ancak kan sulandırıcı etkileri nedeniyle, kanama riskini
      artırabilecek alkol veya kan inceltici etkisi olan bazı gıdalarla (örneğin, sarımsak,
      zencefil) birlikte kullanıldığında dikkatli olunması önerilir.`,

    color: "bg-orange-700",
  },
  {
    title: "Metabolik İlaçlar",

    subtitle1: "ANTİDİYABETİK İLAÇLAR",
    description1: `Antidiyabetik ilaçlar, diyabet hastalarının kan şekeri seviyelerini kontrol altında
      tutmaya yardımcı olan ilaçlardır. Bu ilaçlar, vücuttaki kan şekerini düşürerek veya
      insülin direncini azaltarak etki gösterir. Antidiyabetik ilaçlar, tip 1 diyabet (insülin
      bağımlı diyabet) ve tip 2 diyabet (insülin direnci veya yetersiz üretimle karakterize
      edilen diyabet) gibi farklı diyabet türlerinin tedavisinde kullanılır. Bu ilaçlar, oral
      alınan haplar, insülin enjeksiyonları veya insülin pompaları şeklinde mevcuttur ve
      kan şekeri seviyelerini istikrarlı bir aralıkta tutmak için düzenli olarak kullanılması
      gerekmektedir.`,
    description1v1: `Antidiyabetik ilaçlarla besin alımı dikkatle yönetilmelidir. Özellikle, kan şekerini
      etkileyen karbonhidrat içeriği yüksek gıdaların tüketimi, ilaçların etkinliğini
      etkileyebilir. Örneğin, hızlı emilen karbonhidratlar, kan şekerini hızla yükseltebilir
      ve antidiyabetik ilaçların etkisini azaltabilir. Bu nedenle, diyabet hastalarının
      dengeli bir diyete ve düzenli öğün saatlerine uygun beslenmeleri önemlidir. Ayrıca,
      bazı antidiyabetik ilaçlarla alkol tüketimi, kan şekerini etkileyerek hipoglisemi
      (düşük kan şekeri) riskini artırabilir.`,

    subtitle2: "KOLESTEROL DÜŞÜREN İLAÇLAR",
    description2: `Kolesterol düşüren ilaçlar, kandaki kolesterol seviyelerini kontrol altında tutmaya
      yardımcı olan ilaçlardır. Bu ilaçlar genellikle yüksek kolesterol seviyeleriyle ilişkili
      olan kalp hastalıklarını önlemek veya tedavi etmek amacıyla kullanılır. Kolesterol
      düşüren ilaçlar genellikle kolesterol sentezini engelleyen veya kolesterol emilimini
      azaltan bir mekanizma üzerinden etki eder. İlaçlar arasında statinler, reçetesiz
      satılan bileşenler, kolestiramin ve fibratlar gibi çeşitli türler bulunur. Bu ilaçlar, LDL
      (kötü) kolesterolü düşürerek ve HDL (iyi) kolesterolü artırarak kardiyovasküler
      riskleri azaltabilir.`,

    color: "bg-amber-500",
  },
  {
    title: "Antiinflamatuar İlaçlar",
    subtitle1: "NON-STEROİD ANTİİNFLAMATUAR İLAÇLAR (NSAID'LER",
    description1: `Non-steroid antiinflamatuar ilaçlar (NSAID'ler), inflamasyonu azaltan, ağrıyı
      hafifleten ve ateşi düşüren bir antiinflamatuar ilaç sınıfını ifade eder. NSAID'ler,
      prostaglandin adı verilen maddelerin üretimini engelleyerek çalışırlar.
      Prostaglandinler, vücutta iltihaplanma, ağrı ve ateş gibi işlevlere katkıda bulunur.
      Bu ilaçlar genellikle artrit, adet sancıları, baş ağrısı, kas ağrıları, romatizma gibi
      durumların tedavisinde kullanılır. Bazı yaygın NSAID'ler arasında ibuprofen,
      naproksen, diklofenak ve aspirin bulunur.`,
    description1v1: `NSAID'ler genellikle mide üzerinde etkili olabilir ve mide irritasyonuna yol açabilir.
      Bu nedenle, NSAID'lerin mide üzerindeki etkilerini azaltmak için ilaçları yemekle
      birlikte almak veya bir antiasit ile birlikte almak önerilebilir. Ayrıca, NSAID'lerin
      uzun süreli kullanımı, mide ülseri veya gastrointestinal kanama riskini artırabilir, bu
      nedenle alkol ve asitli içeceklerin tüketiminden kaçınılması önemlidir. NSAID'ler
      ayrıca böbrekler üzerinde de etkili olabilir ve böbrek fonksiyonlarını etkileyebilir, bu
      nedenle bol miktarda su içmek ve sodyum alımını kontrol etmek önemlidir.`,

    subtitle2: "KORTİKOSTEROİDLER",
    description2: `Kortikosteroidler, kortizol gibi doğal vücut hormonlarının sentetik versiyonları olan
      bir ilaç sınıfını ifade eder. Bu ilaçlar, vücudun bağışıklık sistemine ve inflamasyon
      süreçlerine müdahale eder. Kortikosteroidler, iltihaplı durumların tedavisinde ve
      bağışıklık sisteminin aşırı reaksiyonlarının kontrol edilmesinde kullanılır. Ayrıca,
      allerjiler, astım, romatoid artrit gibi inflamatuar hastalıkların tedavisinde, cilt
      sorunları ve solunum yolu enfeksiyonları gibi durumların tedavisinde de
      kullanılabilirler. Kortikosteroidlerin çeşitli formları vardır, bazıları topikal olarak (cilt
      üzerine), bazıları ağız yoluyla alınır ve bazıları da enjeksiyon yoluyla verilir.`,
    description2v1: `Kortikosteroidlerin uzun süreli kullanımı, vücuttaki sıvı ve elektrolit dengesini
      etkileyebilir ve potasyum seviyelerini düşürebilir. Bu nedenle, potasyum açısından
      zengin besinlerin tüketimi veya potasyum takviyesi gerekebilir. Ayrıca,
      kortikosteroidler mide üzerinde de etkili olabilir ve mide irritasyonuna veya
      ülserasyon riskine yol açabilir. Bu nedenle, ilaçları yemekle birlikte almak veya bir
      antiasit ile birlikte almak, mide yan etkilerini azaltabilir.`,

    color: "bg-amber-950",
  },
  {
    title: "Hormonal İlaçlar",

    subtitle1: "HORMONAL İLAÇLAR",
    description1: `Hormon ilaçları, vücuttaki hormon dengesizliklerini düzeltmek veya eksik
    hormonları telafi etmek için kullanılır. Ancak, bu ilaçlarla birlikte bazı besinlerin
    tüketimi, ilaçların etkisini etkileyebilir.`,
    description1v1: `Kalsiyum ve soya, özellikle tiroid hormonları gibi bazı ilaçların emilimini azaltabilir.
      Bu durum, ilacın etkinliğini azaltabilir. Özellikle kalsiyum takviyesi veya soya
      ürünlerinin tüketimi, hormon ilaçlarının emilimini etkileyebilir.`,
    description1v2: `Demir ve çinko takviyeleri, bazı hormon ilaçlarının emilimini azaltabilir. Özellikle
      demir ve çinko takviyelerinin oral kontraseptifler gibi ilaçlarla birlikte alınması,
      ilacın etkinliğini azaltabilir.`,
    description1v3: `Yağlı gıdaların tüketimi, özellikle yağda çözünen hormon ilaçlarıyla birlikte
      alındığında ilacın emilimini etkileyebilir. Bu durum, ilacın etkinliğini artırabilir veya
      azaltabilir. Dolayısıyla, hormon ilaçlarının dozajı ve zamanlaması hakkında
      doktorunuza danışmalısınız.`,

    color: "bg-pink-700",
  },
  {
    title: "Diğer İlaçlar",
    subtitle1: "ANTİOSTEOPOROZ İLAÇ",
    description1: `Antiosteoporoz ilaçları, osteoporoz adı verilen kemik yoğunluğunun azalması ve
    kemik kırıklarının riskinin artmasıyla karakterize edilen bir durumun tedavisinde
    kullanılan ilaçlardır. Bu ilaçlar, kemik kaybını azaltarak veya kemik yoğunluğunu
    artırarak çalışır. Genellikle kalsiyum ve D vitamini takviyeleri ile birlikte kullanılırlar.
    Antiosteoporoz ilaçları arasında bifosfonatlar, selektif östrojen reseptör
    modülatörleri (SERM'ler), denosumab, teriparatid ve kalsitonin gibi ilaçlar bulunur.
    Bu ilaçlar, kemiklerin kırılma riskini azaltarak kemik yoğunluğunu artırır ve
    kemiklerin sağlamlığını korur.`,
    description1v1: `Antiosteoporoz ilaçları ile bazı besinler veya takviyeler arasında etkileşimler
      gözlemlenebilir. Özellikle, kalsiyum ve D vitamini takviyeleri, antiosteoporoz
      ilaçlarının etkinliğini artırabilir. Ancak, bazı antiosteoporoz ilaçlarının alımı sırasında
      alınan kalsiyum miktarı, ilacın emilimini etkileyebilir veya etkisini azaltabilir.`,
    subtitle2: "MAO İNHİBİTÖRLERİ",
    description2: `Monoamin oksidaz (MAO) inhibitörleri, depresyon ve bazı anksiyete bozukluklarının
      tedavisinde kullanılan ilaç sınıfını ifade eder. Bu ilaçlar, beyindeki monoamin
      oksidaz enzimlerini inhibe ederek çalışır ve nörotransmitterlerin (serotonin,
      noradrenalin ve dopamin gibi) seviyelerini artırarak ruh halini düzenlerler. MAO
      inhibitörleri genellikle selektif olmayan (non-selektif) ve selektif olmak üzere iki ana
      gruba ayrılır. Selektif olmayan MAO inhibitörleri, hem MAO-A hem de MAO-B
      enzimlerini inhibe ederken, selektif MAO inhibitörleri yalnızca bir enzimi hedefler.
      Bu ilaçlar, diğer antidepresanlara yanıt vermeyen veya onları tolere edemeyen
      hastalar için alternatif bir tedavi seçeneği olabilir.`,
    description2v1: `MAO inhibitörleriyle bazı besinler veya içecekler arasında ciddi etkileşimler olabilir.
      Özellikle, tyramin içeren gıdalarla alımı sırasında MAO inhibitörlerinin kullanımı,
      potansiyel olarak ciddi hipertansiyon krizlerine yol açabilir. Tyramin, fermente
      gıdalar, şarap, peynir, salam gibi bazı gıdalarda bulunur ve MAO enzimlerinin
      inhibisyonu durumunda vazokonstriksiyona neden olabilir.`,

    subtitle3: "NARKOTİK ANALJEZİKLER",
    description3: `Narkotik analjezik ilaçlar, şiddetli ağrıyı hafifletmek veya kontrol altına almak için
      kullanılan opioid ilaç sınıfını ifade eder. Bu ilaçlar, merkezi sinir sistemine etki
      ederek ağrı algısını azaltır ve beyindeki ağrı reseptörlerine bağlanarak ağrı hissini
      bloke eder. Narkotik analjezikler genellikle cerrahi operasyonlar sonrası veya ciddi
      travma gibi durumlarda, kanser ağrısı veya kronik ağrı gibi uzun süreli ağrı
      durumlarında kullanılır. Opioidler arasında morfin, kodein, oksikodon ve
      hidrocodon gibi ilaçlar bulunur. Bu ilaçlar, ağrıyı hafifletmek için etkili olabilirken,
      aynı zamanda bağımlılık ve kötüye kullanım riski taşıyan potansiyel olarak
      bağımlılık yapıcı maddelerdir.`,
    description3v1: `Narkotik analjeziklerle bazı besinler veya içecekler arasında etkileşimler olabilir.
      Özellikle, alkol tüketimi ve opioid ilaçlar arasında ciddi etkileşimler olabilir. Alkol,
      opioidlerin etkisini artırabilir ve merkezi sinir sistemi üzerinde depresif bir etki
      yapabilir, bu nedenle alkol tüketimi sırasında opioid ilaçların kullanılması genellikle
      önerilmez. Ayrıca, bazı opioid ilaçlar, alım sırasında bazı yiyeceklerle veya
      içeceklerle birlikte kullanıldığında mide rahatsızlığı veya bulantıya neden olabilir.`,

    subtitle4: "PENİSİLAMİN",
    description4: `Penisilamin, romatoid artrit gibi otoimmün hastalıkların tedavisinde kullanılan bir
      ilaçtır. Bu ilaç, vücuttaki bakır seviyelerini azaltarak ve bağışıklık sisteminin
      aktivitesini düzenleyerek çalışır. Romatoid artrit gibi otoimmün hastalıklarda,
      bağışıklık sistemi yanlışlıkla vücudun kendi dokularına saldırdığı için bu tür ilaçlar
      hastalığın semptomlarını hafifletmek ve hastalığın ilerlemesini yavaşlatmak için
      kullanılır. Penisilamin, bakırun vücutta birikmesine neden olan Wilson hastalığının
      tedavisinde de kullanılabilir.`,
    description4v1: `Penisilaminin alımı sırasında bazı besinler veya içeceklerle etkileşimler olabilir.
      Özellikle, kalsiyum, demir ve çinko gibi bazı mineraller, penisilaminin emilimini
      etkileyebilir veya etkisini azaltabilir.`,

    subtitle5: "PENİSİLİNLER",
    description5: `Penisilin, antibiyotik sınıfına ait bir ilaçtır ve bakteriyel enfeksiyonların tedavisinde
      yaygın olarak kullanılır. Penisilin, bakterilerin hücre duvarlarını oluşturan
      peptidoglikan adı verilen bir maddenin sentezini engelleyerek çalışır. Bu,
      bakterilerin çoğalmasını durdurur ve enfeksiyonun yayılmasını önler. Penisilin,
      birçok farklı bakteri türüne karşı etkilidir ve boğaz enfeksiyonları, idrar yolu
      enfeksiyonları, cilt enfeksiyonları ve solunum yolu enfeksiyonları gibi birçok farklı
      enfeksiyonun tedavisinde kullanılabilir.`,
    description5v1: `Penisilin genellikle aç veya tok karnına alınabilir ve besinlerle etkileşime girmez.
      Ancak, bazı özel durumlarda, belirli gıdalar veya içecekler ile penisilin alımı
      sırasında etkileşimler olabilir. Örneğin, bazı penisilin türleri, yüksek kalsiyum içeren
      süt ürünleri ile alındığında emilimleri azalabilir. Ayrıca, alkol tüketimi ile penisilin
      kullanımı arasında ciddi etkileşimler olabilir ve bu kombinasyon istenmeyen yan
      etkilere yol açabilir.`,

    color: "bg-pink-700",
  },
];

/*

ANTİBİYOTİKLER


Asitli besinler; Kafein, domates, meyva suları,asitli besinler; Kafein, domates,süt ve süt ürünleri gibi kalsiyumca zengin besinler ile birlikte alınmamalıdır.

Asitli besinlerden dolayı artan mide asidi ilacın midedeki harabiyetini artırır.

Kalsiyum ilacın kandaki emilimini azaltabilir.



ANTİKOAGÜLANLAR

K Vitaminince zengin besinlerle Brokoli, Brüksel lahanası, Ispanak, Lahana, E Vitamini ile birlikte alınmamalıdır.

K Vitamini antikoagülanların etkisini azaltır.
*/

export { constants };
