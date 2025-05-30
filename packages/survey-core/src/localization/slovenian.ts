import { setupLocale } from "survey-core";

export var slovenianStrings = {
  pagePrevText: "Prejšnja",
  pageNextText: "Naslednja",
  completeText: "Zaključi",
  previewText: "Predogled",
  editText: "Uredi",
  startSurveyText: "Začni",
  commentText: "Prosimo, pustite komentar",
  otherItemText: "Drugo (opišite)",
  noneItemText: "Noben",
  refuseItemText: "Zavrni odgovor",
  dontKnowItemText: "Ne vem",
  selectAllItemText: "Izberi vse",
  deselectAllItemText: "Odstrani izbiro",
  progressText: "Stran {0} od {1}",
  indexText: "{0} od {1}",
  panelDynamicProgressText: "{0} od {1}",
  panelDynamicTabTextFormat: "Plošča {panelIndex}",
  questionsProgressText: "Odgovorjeno {0}/{1} vprašanj",
  emptySurvey: "Anketa ne vsebuje vidnih elementov.",
  completingSurvey: "Hvala, ker ste izpolnili anketo",
  completingSurveyBefore: "To anketo ste že izpolnili.",
  loadingSurvey: "Nalaganje ankete...",
  placeholder: "Izberite...",
  ratingOptionsCaption: "Izberite...",
  buttongroupOptionsCaption: "Izbrati...",
  value: "vrednost",
  requiredError: "Odgovor je obvezen.",
  requiredErrorInPanel: "Obvezen odgovor: odgovorite na vsaj eno vprašanje.",
  requiredInAllRowsError: "Obvezen odgovor: odgovorite na vsa vprašanja v vrsticah.",
  eachRowUniqueError: "Vsaka vrstica mora imeti edinstveno vrednost.",
  numericError: "Vrednost mora biti številčna.",
  minError: "Vrednost ne sme biti manjša od {0}",
  maxError: "Vrednost ne sme biti večja od {0}",
  textNoDigitsAllow: "Številke niso dovoljene.",
  textMinLength: "Vnesite vsaj {0} znakov.",
  textMaxLength: "Vnesite največ {0} znakov.",
  textMinMaxLength: "Vnesite vsaj {0} in največ {1} znakov.",
  minRowCountError: "Izpolnite vsaj {0} vrstic.",
  minSelectError: "Izberite vsaj {0} možnosti.",
  maxSelectError: "Izberite največ {0} možnosti.",
  numericMinMax: "'{0}' mora biti vsaj {1} in največ {2}",
  numericMin: "'{0}' mora biti vsaj {1}",
  numericMax: "'{0}' mora biti največ {1}",
  invalidEmail: "Vnesite veljaven e-poštni naslov.",
  invalidExpression: "Izraz: {0} mora vrniti 'true'.",
  urlRequestError: "Zahteva je vrnila napako '{0}'. {1}",
  urlGetChoicesError: "Zahteva je vrnila prazne podatke ali lastnost 'path' ni pravilna.",
  exceedMaxSize: "Velikost datoteke ne sme presegati {0}.",
  noUploadFilesHandler: "Datotek ni mogoče naložiti. Dodajte obravnavo za dogodek 'onUploadFiles'.",
  otherRequiredError: "Obvezen odgovor: vnesite drugo vrednost.",
  uploadingFile: "Vaša datoteka se nalaga. Počakajte nekaj sekund in poskusite znova.",
  loadingFile: "Nalaganje...",
  chooseFile: "Izberite datoteko...",
  noFileChosen: "Ni izbrane datoteke",
  filePlaceholder: "Povlecite in spustite datoteko tukaj ali kliknite spodnji gumb za izbiro datoteke za nalaganje.",
  confirmDelete: "Ste prepričani, da želite izbrisati ta zapis?",
  keyDuplicationError: "Ta vrednost mora biti edinstvena.",
  addColumn: "Dodaj stolpec",
  addRow: "Dodaj vrstico",
  removeRow: "Odstrani",
  noRowsText: "Ni vrstic.",
  rowIndexTemplateTitle: "Vrstica {rowIndex}",
  rowNameTemplateTitle: "{rowTitle}",
  addPanel: "Dodaj novo",
  removePanel: "Odstrani",
  showDetails: "Prikaži podrobnosti",
  hideDetails: "Skrij podrobnosti",
  choices_Item: "postavka",
  choices_Choice: "Možnost izbire",
  matrix_column: "Stolpec",
  matrix_row: "Vrstica",
  multipletext_itemname: "besedilo",
  savingData: "Rezultati se shranjujejo na strežnik...",
  savingDataError: "Prišlo je do napake in rezultatov ni bilo mogoče shraniti.",
  savingDataSuccess: "Rezultati so bili uspešno shranjeni!",
  savingExceedSize: "Vaš odgovor presega 64 KB. Zmanjšajte velikost datotek in poskusite znova ali se obrnite na lastnika ankete.",
  saveAgainButton: "Poskusite znova",
  timerMin: "min",
  timerSec: "sek",
  timerSpentAll: "Na tej strani ste porabili {0}, skupno {1}.",
  timerSpentPage: "Na tej strani ste porabili {0}.",
  timerSpentSurvey: "Skupaj ste porabili {0}.",
  timerLimitAll: "Na tej strani ste porabili {0} od {1} in skupno {2} od {3}.",
  timerLimitPage: "Na tej strani ste porabili {0} od {1}.",
  timerLimitSurvey: "Skupaj ste porabili {0} od {1}.",
  clearCaption: "Počisti",
  signaturePlaceHolder: "Podpišite se tukaj",
  signaturePlaceHolderReadOnly: "Ni podpisa",
  chooseFileCaption: "Izberi datoteko",
  takePhotoCaption: "Slikaj",
  photoPlaceholder: "Kliknite spodnji gumb, da posnamete fotografijo s kamero.",
  fileOrPhotoPlaceholder: "Povlecite in spustite datoteko za nalaganje ali posnemite fotografijo s kamero.",
  replaceFileCaption: "Zamenjaj datoteko",
  removeFileCaption: "Odstrani to datoteko",
  booleanCheckedLabel: "Da",
  booleanUncheckedLabel: "Ne",
  confirmRemoveFile: "Ste prepričani, da želite odstraniti to datoteko: {0}?",
  confirmRemoveAllFiles: "Ste prepričani, da želite odstraniti vse datoteke?",
  questionTitlePatternText: "Naslov vprašanja",
  modalCancelButtonText: "Prekliči",
  modalApplyButtonText: "Uporabi",
  filterStringPlaceholder: "Vnesite za iskanje...",
  emptyMessage: "Ni podatkov za prikaz",
  loadingPage: "Nakladanje...",
  loadingData: "Nakladanje...",
  noEntriesText: "Ni še vnosov.\nKliknite spodnji gumb za dodajanje novega vnosa.",
  noEntriesReadonlyText: "Ni vnosov",
  tabTitlePlaceholder: "Nova plošča",
  more: "Več",
  tagboxDoneButtonCaption: "V redu",
  selectToRankEmptyRankedAreaText: "Vse možnosti so izbrane za razvrščanje",
  selectToRankEmptyUnrankedAreaText: "Povlecite izbire sem, da jih razvrstite",
  ok: "V redu",
  cancel: "Prekliči",
  createCustomItem: "Ustvari element »{0}« ..."
};
setupLocale({ localeCode: "sl", strings: slovenianStrings, nativeName: "slovenščina", englishName: "Slovenian" });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// loadingPage: "Loading..." => "Nakladanje..."
// loadingData: "Loading..." => "Nakladanje..."
// commentText: "Please leave a comment" => "Prosimo, pustite komentar"
// buttongroupOptionsCaption: "Select..." => "Izbrati..."
// rowIndexTemplateTitle: "Row {rowIndex}" => "Vrstica {rowIndex}"
// createCustomItem: "Create \"{0}\" item..." => "Ustvari element »{0}« ..."