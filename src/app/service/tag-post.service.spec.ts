import { TestBed } from '@angular/core/testing';

import { TagPostService } from './tag-post.service';

describe('TagPostService', () => {
  let service: TagPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
