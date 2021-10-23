import { PrismicAllDocumentTypes, PrismicAuthor } from "../../graphql";

export function isPrismicAuthor(documentType: PrismicAllDocumentTypes): documentType is PrismicAuthor {
  return 'name' in documentType.data
}
