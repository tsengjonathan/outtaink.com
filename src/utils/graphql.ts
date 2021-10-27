import { PrismicAllDocumentTypes, PrismicAuthor } from "../utils/types";

export function isPrismicAuthor(documentType: PrismicAllDocumentTypes): documentType is PrismicAuthor {
  return 'name' in documentType.data
}
