class PaginationUtil {
  constructor(elements, itemsPerPage) {
    this.elements = elements;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    return Math.ceil(this.elements.length / this.itemsPerPage);
  }

  itemCount() {
    return this.elements.length;
  }

  pageItemCount(pageNumber) {
    if (pageNumber < 0 || pageNumber >= this.pageCount()) {
      return -1;
    }
    if (pageNumber === this.pageCount() - 1) {
      return this.itemCount() % this.itemsPerPage;
    }
    return this.itemsPerPage;
  }

  pageIndex(idx) {
    if (idx < 0 || idx >= this.itemCount()) {
      return -1;
    }
    return Math.floor(idx / this.itemsPerPage);
  }
};
