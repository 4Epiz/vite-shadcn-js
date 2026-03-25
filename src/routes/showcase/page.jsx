import { useState } from 'react'
import {
  ArrowLeftIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  GalleryVerticalEndIcon,
  GripVerticalIcon,
  InfoIcon,
  LayoutDashboardIcon,
  MailIcon,
  MoonStarIcon,
  SearchIcon,
  Settings2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  UserIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Field, FieldContent, FieldDescription, FieldLabel, FieldSet, FieldTitle } from '@/components/ui/field'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Kbd } from '@/components/ui/kbd'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import ThemeSwitcher from '@/components/theme-switcher'

const chartData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 173, mobile: 190 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
}

function ShowcasePage() {
  const [emailOptIn, setEmailOptIn] = useState(true)
  const [notifications, setNotifications] = useState(false)
  const [sliderValue, setSliderValue] = useState([64])
  const [otp, setOtp] = useState('')
  const [calendarDate, setCalendarDate] = useState(new Date())

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border bg-card/80 p-5 shadow-sm backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Showcase</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">React Router</Badge>
                <Badge variant="outline">Responsive</Badge>
                <Badge>shadcn/ui</Badge>
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Component Showcase
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  A dedicated route that exercises the generated shadcn components in
                  a responsive layout while keeping the original home screen in
                  place.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ThemeSwitcher />
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/">
                  <ArrowLeftIcon data-icon="inline-start" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions and Navigation</CardTitle>
                <CardDescription>
                  Buttons, toggles, menus, pagination and small interaction patterns.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon">
                        <BellIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Notifications
                      <Kbd>⌘K</Kbd>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <ButtonGroup>
                    <Button variant="outline">Day</Button>
                    <Button variant="outline">Week</Button>
                    <Button variant="outline">Month</Button>
                    <ButtonGroupText>View</ButtonGroupText>
                  </ButtonGroup>

                  <ToggleGroup type="multiple" variant="outline">
                    <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                    <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                    <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Toggle variant="outline" aria-label="Toggle starred">
                    <StarIcon />
                  </Toggle>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Quick menu
                        <ChevronsUpDownIcon data-icon="inline-end" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem checked={emailOptIn} onCheckedChange={setEmailOptIn}>
                        Email updates
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem checked={notifications} onCheckedChange={setNotifications}>
                        Push notifications
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Settings2Icon />
                        Manage settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader>
                        <PopoverTitle>Quick summary</PopoverTitle>
                        <PopoverDescription>
                          Popovers, menus and tooltips are using the routed page theme.
                        </PopoverDescription>
                      </PopoverHeader>
                    </PopoverContent>
                  </Popover>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost">@vite-react</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      Lightweight hover previews work well for metadata and shortcuts.
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#pagination" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pagination" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pagination">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#pagination" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forms</CardTitle>
                <CardDescription>
                  Input primitives, selections, range controls and validation-style layout.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-2">
                <FieldSet>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <FieldContent>
                      <Input id="email" type="email" placeholder="hello@vite.dev" />
                      <FieldDescription>
                        Standard input with the generated shadcn styling.
                      </FieldDescription>
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="search">Search</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput id="search" placeholder="Search components" />
                      <InputGroupAddon align="inline-end">
                        <InputGroupText>
                          <Kbd>/</Kbd>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="plan">Plan</FieldLabel>
                    <Select defaultValue="pro">
                      <SelectTrigger id="plan" className="w-full">
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">Starter</SelectItem>
                        <SelectItem value="pro">Pro</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="team-size">Team size</FieldLabel>
                    <NativeSelect id="team-size" className="w-full">
                      <NativeSelectOption>1-5 people</NativeSelectOption>
                      <NativeSelectOption>6-20 people</NativeSelectOption>
                      <NativeSelectOption>20+ people</NativeSelectOption>
                    </NativeSelect>
                  </Field>
                </FieldSet>

                <FieldSet>
                  <Field>
                    <FieldLabel htmlFor="notes">Notes</FieldLabel>
                    <Textarea id="notes" placeholder="Leave a note for your team..." />
                  </Field>

                  <Field orientation="horizontal">
                    <Checkbox id="email-opt-in" checked={emailOptIn} onCheckedChange={setEmailOptIn} />
                    <FieldContent>
                      <FieldLabel htmlFor="email-opt-in">Email updates</FieldLabel>
                      <FieldDescription>
                        Receive changelog and release information.
                      </FieldDescription>
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldTitle>Environment</FieldTitle>
                    <RadioGroup defaultValue="preview">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="preview" value="preview" />
                        <Label htmlFor="preview">Preview</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="production" value="production" />
                        <Label htmlFor="production">Production</Label>
                      </div>
                    </RadioGroup>
                  </Field>

                  <Field orientation="horizontal">
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                    <FieldContent>
                      <FieldLabel>Notifications</FieldLabel>
                      <FieldDescription>Toggle background alerts for deployments.</FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldSet>

                <div className="lg:col-span-2 grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <Label>OTP input</Label>
                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div className="space-y-3">
                    <Label>Confidence slider</Label>
                    <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                    <Progress value={sliderValue[0]} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="feedback" className="w-full">
              <TabsList>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="overlay">Overlays</TabsTrigger>
              </TabsList>

              <TabsContent value="feedback" className="mt-4">
                <div className="grid gap-6 xl:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Alerts and Empty States</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <Alert>
                        <InfoIcon />
                        <AlertTitle>Generated components are active</AlertTitle>
                        <AlertDescription>
                          This route is rendering a live mix of the shadcn files added to the repo.
                        </AlertDescription>
                      </Alert>

                      <Empty className="border">
                        <EmptyHeader>
                          <EmptyMedia variant="icon">
                            <GalleryVerticalEndIcon />
                          </EmptyMedia>
                          <EmptyTitle>No deployments yet</EmptyTitle>
                          <EmptyDescription>
                            Hook this state up to your backend once the dashboard data exists.
                          </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                          <Button onClick={() => toast.success('Deployment queued')}>Create deployment</Button>
                        </EmptyContent>
                      </Empty>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Loaders and placeholders</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Spinner />
                        <span className="text-sm text-muted-foreground">Background sync in progress</span>
                      </div>
                      <div className="grid gap-3">
                        <Skeleton className="h-5 w-1/3" />
                        <Skeleton className="h-24 w-full rounded-xl" />
                        <Skeleton className="h-10 w-2/3" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-4">
                <div className="grid gap-6 xl:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team snapshot</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <AvatarGroup>
                        <Avatar size="lg">
                          <AvatarImage src="https://i.pravatar.cc/100?img=12" alt="User 1" />
                          <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                          <AvatarImage src="https://i.pravatar.cc/100?img=22" alt="User 2" />
                          <AvatarFallback>RA</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                          <AvatarFallback>UI</AvatarFallback>
                        </Avatar>
                        <AvatarGroupCount>+4</AvatarGroupCount>
                      </AvatarGroup>

                      <ItemGroup>
                        <Item variant="muted">
                          <ItemMedia variant="icon">
                            <ShieldCheckIcon className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>Access policy</ItemTitle>
                            <ItemDescription>2-factor authentication enabled for all admins.</ItemDescription>
                          </ItemContent>
                          <ItemActions>
                            <Badge>Healthy</Badge>
                          </ItemActions>
                        </Item>
                        <Item variant="outline">
                          <ItemMedia variant="icon">
                            <MailIcon className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>Inbox routing</ItemTitle>
                            <ItemDescription>Support traffic is routed across three inboxes.</ItemDescription>
                          </ItemContent>
                          <ItemActions>
                            <Badge variant="secondary">Live</Badge>
                          </ItemActions>
                        </Item>
                      </ItemGroup>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Usage chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer className="min-h-[240px] w-full" config={chartConfig}>
                        <BarChart data={chartData}>
                          <CartesianGrid vertical={false} />
                          <XAxis dataKey="month" tickLine={false} axisLine={false} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <ChartLegend content={<ChartLegendContent />} />
                          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={8} />
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="overlay" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Dialogs, sheets and drawers</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Invite a teammate</DialogTitle>
                          <DialogDescription>
                            Dialogs are routed correctly and inherit the active theme.
                          </DialogDescription>
                        </DialogHeader>
                        <Input placeholder="teammate@example.com" />
                        <DialogFooter showCloseButton>
                          <Button>Send invite</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">Open alert dialog</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogMedia>
                            <ShieldCheckIcon />
                          </AlertDialogMedia>
                          <AlertDialogTitle>Confirm destructive action</AlertDialogTitle>
                          <AlertDialogDescription>
                            This is a routed confirmation dialog using the generated shadcn API.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Open sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Project settings</SheetTitle>
                          <SheetDescription>
                            Sheets render from the side and stay responsive on smaller screens.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-3 px-4">
                          <Input placeholder="Project name" />
                          <Textarea placeholder="Internal notes" />
                        </div>
                        <SheetFooter>
                          <Button>Save changes</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>

                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline">Open drawer</Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Mobile-first actions</DrawerTitle>
                          <DrawerDescription>
                            Drawers are useful for condensed responsive workflows.
                          </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          <Button>Continue</Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <aside className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar and schedule</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar mode="single" selected={calendarDate} onSelect={setCalendarDate} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scrollable table</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64 rounded-xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Plan</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ['Acme', 'Active', 'Pro'],
                        ['Vercel', 'Trial', 'Starter'],
                        ['OpenAI', 'Active', 'Enterprise'],
                        ['Linear', 'Paused', 'Pro'],
                        ['Figma', 'Active', 'Business'],
                        ['Notion', 'Trial', 'Starter'],
                      ].map(([name, status, plan]) => (
                        <TableRow key={name}>
                          <TableCell>{name}</TableCell>
                          <TableCell>{status}</TableCell>
                          <TableCell>{plan}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media and layout primitives</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5">
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2xl border bg-muted">
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.35),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]">
                    <SparklesIcon className="size-10 text-muted-foreground" />
                  </div>
                </AspectRatio>

                <div className="px-10">
                  <Carousel opts={{ align: 'start' }} className="w-full">
                    <CarouselContent>
                      {['Scale', 'Ship', 'Observe'].map((item) => (
                        <CarouselItem key={item} className="md:basis-1/2">
                          <Card className="h-full">
                            <CardContent className="flex min-h-32 items-center justify-center text-lg font-medium">
                              {item}
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                <ResizablePanelGroup direction="horizontal" className="min-h-40 rounded-xl border">
                  <ResizablePanel defaultSize={45}>
                    <div className="flex h-full items-center justify-center bg-muted/50 text-sm text-muted-foreground">
                      Left panel
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle>
                    <GripVerticalIcon className="size-3.5" />
                  </ResizableHandle>
                  <ResizablePanel defaultSize={55}>
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      Right panel
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why use a separate showcase route?</AccordionTrigger>
                    <AccordionContent>
                      It keeps the home page intact while giving you a reliable place to validate component behavior.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is the layout responsive?</AccordionTrigger>
                    <AccordionContent>
                      Yes. The page uses stacked sections on smaller widths and expands into multi-column layouts as space increases.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="justify-between">
                <Badge variant="secondary">Responsive</Badge>
                <Button variant="ghost" size="sm" onClick={() => toast('Showcase route is live')}>
                  Ping toast
                </Button>
              </CardFooter>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default ShowcasePage
